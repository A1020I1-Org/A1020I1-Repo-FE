import { Component, OnInit } from '@angular/core';
import {IComputer} from "../../interface/IComputer";
import {ComputerService} from "../../services/computer.service";
import {DeleteComputerComponent} from "../delete-computer/delete-computer.component";
import {MatDialog} from "@angular/material/dialog";
import {ComputerTypeService} from "../../services/computer-type.service";
import {ComputerStatusService} from "../../services/computer-status.service";
import {IType} from "../../interface/IType";
import {IStatus} from "../../interface/IStatus";

@Component({
  selector: 'app-show-computer',
  templateUrl: './show-computer.component.html',
  styleUrls: ['./show-computer.component.css']
})
export class ShowComputerComponent implements OnInit {
  listComputer: IComputer[] = [];
  listComputerType: IType[] = [];
  listComputerStatus: IStatus[] = [];
  startUsedDateToComputer: string="";
  typeComputer= '';
  idComputer: string="";
  startUsedDateFromComputer: string="";
  statusComputer = '';
  computerLocation: string="";
  constructor(private computerService: ComputerService,private dialog: MatDialog,private computerTypeService: ComputerTypeService,
  private computerStatusService: ComputerStatusService) { }

  ngOnInit(): void {
    this.computerService.getAllComputer().subscribe(
      (data)=>{
        let page:IComputer[] = data.content;
        this.listComputer = page;
        console.log(data);
        },
      ()=>{
        console.log("Error");
      },
      ()=>{
        console.log("Complete");
      }
    );
    this.computerTypeService.getAllType().subscribe((data)=>{
      // @ts-ignore
      this.listComputerType = data;
    });
    this.computerStatusService.getAllStatus().subscribe((data)=>{
      // @ts-ignore
      this.listComputerStatus = data;
      // this.listComputerStatus.unshift({statusId : 0, statusName : ''});
    })
  }

  openDialog(computerId: string) {
    this.computerService.getComputerById(computerId).subscribe((data)=>{
      const dialog = this.dialog.open(DeleteComputerComponent,{
        width: '500px',
        data: data,
        disableClose: true,
        autoFocus: false
      }
      );
      dialog.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })

  }

  searchComputer() {
    if(this.idComputer == ''){
      this.idComputer = "";
    };
    if(this.computerLocation == ''){
      this.computerLocation = "";
    };

    if(this.startUsedDateFromComputer == ''){
      this.startUsedDateFromComputer = "1000-01-01";
    };

    if(this.startUsedDateToComputer == ''){
      this.startUsedDateToComputer = "9999-12-31";
    };
    if(this.typeComputer == ''){
      this.typeComputer = "";
    };
    if(this.statusComputer == ''){
      this.statusComputer = "";
    };

    this.computerService.searchComputer(this.idComputer,this.computerLocation, this.startUsedDateFromComputer, this.startUsedDateToComputer,
      this.typeComputer, this.statusComputer).subscribe((data)=>{

      // @ts-ignore
      this.listComputer = data.content;
      console.log("Đây là search"+this.listComputer);

    })
  }
}
