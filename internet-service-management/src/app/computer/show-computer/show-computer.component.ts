import { Component, OnInit } from '@angular/core';
import {IComputer} from "../../interface/IComputer";
import {ComputerService} from "../../services/computer.service";
import {DeleteComputerComponent} from "../delete-computer/delete-computer.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-show-computer',
  templateUrl: './show-computer.component.html',
  styleUrls: ['./show-computer.component.css']
})
export class ShowComputerComponent implements OnInit {
  listComputer: IComputer[] = [];
  constructor(private computerService: ComputerService,private dialog: MatDialog) { }

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
}
