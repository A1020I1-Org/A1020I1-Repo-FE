import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {OrderService} from "../../services/order.service";
import {IService} from "../../interfce/IService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IOrderService} from "../../interfce/IOrderService";

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.css']
})
export class ServiceOrderComponent implements OnInit {

  public orderServiceCreateForm!: FormGroup;
  public services!: IService[];
  public orderServices!: IOrderService[];

  constructor(public serviceService: ServiceService,
              public orderService: OrderService,
              public formBuilder:FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe(data =>{
      this.services = data
    });

    this.orderService.getAllOrderList().subscribe(data => {
      this.orderServices = data;
      console.log(this.orderService)
    });

    this.orderServiceCreateForm = this.formBuilder.group({
      'id': [],
      'OrderID': [''],
      'serviceId': ['', [Validators.required]],
      'serviceName': ['', [Validators.required]],
      'quantity': ['', [Validators.required]],
      'unit': [''],
      'total': [''],
    });
  }

  addNewOrderService(){
    this.orderServiceCreateForm.value.OrderID = "OD-" + Math.floor(Math.random() * 10000);

    this.orderService.addNewOrder(this.orderServiceCreateForm.value).subscribe(data => {
      this.router.navigateByUrl('order').then(r => {});
    })
  }


}
