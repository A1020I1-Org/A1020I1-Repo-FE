import {Component, OnInit} from '@angular/core';
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
  searchName = '';
  indexPagination: number = 1;
  totalPagination: number =0;
  p: any;
  term: any;

  constructor(
    public servicesService: ServiceService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.getAllService();
  }

  getPage(pageNum : number){
    this.servicesService.getPageList(pageNum).subscribe(
       data=> {
         this.listService = data.content;
         this.indexPagination = data.pageable.pageNumber +1;
       }
    )
  }

  getAllService() {
    this.servicesService.getAllService().subscribe(data => {
      this.listService = data.content;
      this.totalPagination = data.totalPages;
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
    this.servicesService.search(this.searchName).subscribe(data => {
      // @ts-ignore
      this.listService = data.content;
    });
  }
}
