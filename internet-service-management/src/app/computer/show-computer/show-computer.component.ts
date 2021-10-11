import { Component, OnInit } from '@angular/core';
import {IComputer} from "../../interface/IComputer";
import {ComputerService} from "../../services/computer.service";

@Component({
  selector: 'app-show-computer',
  templateUrl: './show-computer.component.html',
  styleUrls: ['./show-computer.component.css']
})
export class ShowComputerComponent implements OnInit {
  listComputer: IComputer[] = [];
  constructor(private computerService: ComputerService) { }

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
    )
  }
}
