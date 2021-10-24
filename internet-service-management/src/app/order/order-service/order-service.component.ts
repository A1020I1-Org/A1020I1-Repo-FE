import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Service} from "../../interface/Service";
import {OrderService} from "../../interface/OrderService";
import {ServiceService} from "../../services/service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css']
})
export class OrderServiceComponent implements OnInit {

  public orderServiceCreateForm!: FormGroup;
  public services!: Service[];
  public orderServices!: OrderService[];

  constructor(public serviceService: ServiceService,
              public orderService: OrderService,
              public formBuilder:FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(data =>{
      this.services = data
    });

    // this.orderService.getAllOrderList().subscribe(data => {
    //   this.orderServices = data;
    //   console.log(this.orderService)
    // });
  }

}
