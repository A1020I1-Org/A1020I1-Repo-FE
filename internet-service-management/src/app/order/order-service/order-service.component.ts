import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../interface/Service";
import {ServiceService} from "../../services/service.service";
import {Router} from "@angular/router";
import {OrderServiceService} from "../../services/order-service.service";
import {OrderService} from "../../interface/OrderService";
import {HttpHeaders} from "@angular/common/http";
import {limitQuantity} from "../order-service.validator";
import {passwordConfirm} from "../../customer/customer.validator";


@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css']
})
export class OrderServiceComponent implements OnInit {

  orderServiceCreateForm!: FormGroup;
  services!: Service[];
  service: Service;
  orderService: OrderService;
  orderServices: OrderService[];
  prices: number = 0;
  quantitySV: number;
  success: boolean = false;

  constructor(public serviceService: ServiceService,
              public orderServiceService: OrderServiceService,
              public router: Router,
              ) {

  }

  ngOnInit(): void {
    this.getAllService();
    this.orderServiceCreateForm = new FormGroup({
        id: new FormControl('', ),
        quantity: new FormControl('', [Validators.required, Validators.min(1)]),
        unit: new FormControl(''),
        totalMoney: new FormControl(''),
        orderDate: new FormControl(''),
        status: new FormControl(''),
        service: new FormControl('', [Validators.required]),
        customer: new FormControl('2'),
        pay: new FormControl('2'),
      },
      {
        validators: [limitQuantity("quantity", "quantitySV")]
      }
    );
    // this.getAllOrderService()
  }

  getAllService(){
    this.serviceService.getAllServices().subscribe(data =>{
      this.quantitySV = data.quantity;
      this.services = data
    });
  }

  getAllOrderService(){
    this.orderServiceService.getAll().subscribe(data => {
        this.orderServices = data;
        console.log(this.orderServices);
      },
      error => {
        console.log("CÓ lỗi xảy ra!")
      });
  }

  order(){
    if (this.orderServiceCreateForm.valid){
      this.orderServiceService.create(this.orderServiceCreateForm.value).subscribe(data => {
        this.orderServices = data;
      });
    }
    this.getAllOrderService()
  }

  finish(){
      // this.ngOnInit()
      // this.prices = 0;
      // this.orderServiceCreateForm.controls.unit.patchValue('');
      // this.orderServiceCreateForm.controls.service.patchValue('');
      // this.orderServiceCreateForm.controls.quantity.patchValue('1');
      this.success = true;
      this.fadeOutLink();

  }

  fadeOutLink() {
    setTimeout( () => {
      this.success = false;
    }, 2000);
  }

  changeOrder(idService: any): void{
    this.serviceService.getById(idService.value).subscribe(data =>{
      this.orderServiceCreateForm.controls.unit.patchValue(data.unit);
     this.prices = data.prices;
    });
  }
}
