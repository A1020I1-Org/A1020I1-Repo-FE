import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ServiceService} from "../../services/service.service";
import {ServiceDeleteComponent} from "../service-delete/service-delete.component";
import {IService} from "../../interface/IService";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  listService: IService[] = [];
  nameSearch='';
  indexPagination: number = 1;
  totalPagination: number | undefined;

  constructor(
    public servicesService: ServiceService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getAllService();
  }

  getAllService(){
    this.servicesService.getAllService().subscribe(data => {
      this.listService = data.content;
      console.log(this.listService);
    })
  }

  openDialog(servicesID: any): void {
    this.servicesService.getServicesById(servicesID).subscribe(dataOfServices => {
      const dialogRef = this.dialog.open(ServiceDeleteComponent, {
        width: '500px',
        data: {data1: dataOfServices},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getAllService();
      });
    });
  };

  search() {
    this.servicesService.search(this.nameSearch).subscribe(data=>{
      // @ts-ignore
      this.listService =data;
    });
  }
}
