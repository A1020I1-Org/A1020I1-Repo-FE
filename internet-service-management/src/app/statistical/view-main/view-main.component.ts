import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label} from "ng2-charts";
import {StatisticalServiceService} from "../../services/statistical-service.service";

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.css']
})

export class ViewMainComponent  implements OnInit {
  mode: string= 'computer';
  time: string = '1week';
  messageErrorStart: string = '';
  statusErrorStart: boolean= false;
  messageErrorEnd: string = '';
  statusErrorEnd: boolean= false;
  startTime: string = '';
  endTime: string = '';
  labelY: string = "Hour";
  labelX: string = "Computer";
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [{
    data: [],
    label: '' ,
    backgroundColor: 'rgb(102, 102, 255)',
    borderColor: 'rgb(255, 99, 132)'
  }];
  isData: boolean = true;
  constructor(private service: StatisticalServiceService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void{
    let now = new Date();
    this.startTime = ''+now.getFullYear()+ '-' + (now.getMonth()+1<10?'0'+now.getMonth()+1:now.getMonth()+1) + '-' +
      (now.getDate()<10?'0'+now.getDate():now.getDate());
    this.endTime = this.startTime;
    this.statusErrorEnd = false;
    this.statusErrorStart = false;
    this.barChartData = [];
    this.barChartLabels = [];
    this.barChartLegend = false;
    this.isData = true;
  }

  changeMode(mode: string){
    this.reset();
    this.mode = mode;
    switch (mode) {
      case 'computer':
        this.labelY = 'Time';
        this.labelX = 'Computer';
        break;
      case 'month':
        this.labelY = 'Money';
        this.labelX = 'Month';
        break;
      case 'account':
        this.labelY = '';
        this.labelX = 'Account';
        break;
    }
  }

  onSubmit(){
    if(this.validatingValue()){
      this.barChartLegend = true;
      this.barChartLabels = [];
      switch (this.mode) {
        case 'computer':
          this.viewByComputer();
          break;
        case 'month':
          this.viewByMonth();
          break;
        case 'account':
          this.viewByAccount();
          break;
      }
    }
  }

  validatingValue(): boolean{
    let startTime = new Date(this.startTime);
    let endTime = new Date(this.endTime);
    let now = new Date();
    let betweenDay = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
    let betweenStart = (now.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
    let betweenEnd = (now.getTime() - endTime.getTime()) / (1000 * 60 * 60 * 24);
    this.statusErrorStart = false;
    this.statusErrorEnd = false;
    if(this.mode === 'account'){
      if(betweenStart < 0){
        this.statusErrorStart = true;
        this.messageErrorStart = 'Start date must be less than or equal to current date';
      }
    }
    if(betweenEnd < 0 && this.mode !== 'account'){
      this.statusErrorEnd = true;
      this.messageErrorEnd = 'End date must be less than or equal to current date';
    }
    if(this.statusErrorEnd || this.statusErrorStart){
      return false;
    }
    if(betweenDay < 1 && this.mode !== 'account'){
      this.statusErrorEnd = true;
      this.messageErrorEnd = 'The end date must be 24 hours greater than the start date';
      return false;
    }
    return true;
  }

  viewByComputer(){
    this.service.getDataByComputer(this.startTime, this.endTime).subscribe((data) =>{
      let datas: number[] = [];
      data.forEach((computer) => {
        this.barChartLabels.push(computer.name);
        datas.push(computer.time);
      });
      this.barChartData = [{
        data: datas,
        label: 'Time' ,
        backgroundColor: 'rgb(102, 102, 255)',
        borderColor: 'rgb(102, 102, 255)'
      }];
      this.isData = true;
    }, error => {
      this.isData = false;
    });
  }

  viewByMonth(){
    this.service.getDataByMonth(this.startTime, this.endTime).subscribe((data) =>{
      let totalMoneyComputer: number[] = [];
      let totalMoneyService: number[] = [];
      data.forEach(month => {
        this.barChartLabels.push(month.nameMonth);
        totalMoneyComputer.push(month.totalMoneyComputer);
        totalMoneyService.push(month.totalMoneyService);
      });
      this.barChartData = [{
        data: totalMoneyComputer,
        label: 'Computer' ,
        backgroundColor: 'rgb(102, 102, 255)',
        borderColor: 'rgb(102, 102, 255)'
      },{
        data: totalMoneyService,
        label: 'Service' ,
        backgroundColor: 'rgb(255, 153, 0)',
        borderColor: 'rgb(255, 153, 0)'
      }];
      this.isData = true;
    }, error => {
      this.isData = false;
    })
  }

  viewByAccount(){
    this.service.getDataByAccount(this.startTime, this.time).subscribe(data => {
      let totalMoney: number[] = [];
      let totalTime: number[] = [];
      data.forEach(account => {
        this.barChartLabels.push(account.name);
        totalMoney.push(account.money);
        totalTime.push(account.time);
      });
      this.barChartData = [{
        data: totalTime,
        label: 'Time' ,
        backgroundColor: 'rgb(102, 102, 255)',
        borderColor: 'rgb(102, 102, 255)'
      },{
        data: totalMoney,
        label: 'Money' ,
        backgroundColor: 'rgb(255, 153, 0)',
        borderColor: 'rgb(255, 153, 0)'
      }];
      this.isData = true;
    }, error => {
      this.isData = false;
    })
  }

  setTime(value: string){
    this.time = value;
  }

  setStartTime(value: string){
    if(value !== ''){
      this.startTime = value;
    }
  }

  setEndTime(value: string){
    if(value !== ''){
      this.endTime = value;
    }
  }

}
