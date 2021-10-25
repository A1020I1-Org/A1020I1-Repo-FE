import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../interface/Service";
import {OrderService} from "../../interface/OrderService";
import {ServiceService} from "../../services/service.service";
import {OrderServiceService} from "../../services/order-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-service-detail',
  templateUrl: './order-service-detail.component.html',
  styleUrls: ['./order-service-detail.component.css']
})
export class OrderServiceDetailComponent implements OnInit {

  orderServiceCreateForm!: FormGroup;
  services!: Service[];
  service: Service;
  orderServices: OrderService[];
  orderService: OrderService;

  constructor(public serviceService: ServiceService,
              public orderServiceService: OrderServiceService,
              public router: Router) { }

  ngOnInit(): void {
    this.orderServiceService.getAll().subscribe(data => {
        this.orderServices = data;
        console.log(this.orderServices);
      },
      error => {
        console.log("CÓ lỗi xảy ra!")
      });
  }

}
