import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../interface/Service";
import {ServiceService} from "../../services/service.service";
import {Router} from "@angular/router";
import {OrderServiceService} from "../../services/order-service.service";
import {OrderService} from "../../interface/OrderService";


@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css']
})
export class OrderServiceComponent implements OnInit {

  public orderServiceCreateForm!: FormGroup;
  public services!: Service[];
  service: Service;
  orderService: OrderService;



  constructor(public serviceService: ServiceService,
              public orderServiceService: OrderServiceService,
              public router: Router) { }

  ngOnInit(): void {
    this.getAllService();
    this.orderServiceCreateForm = new FormGroup({
        id: new FormControl(''),
        quantity: new FormControl('', [Validators.required, Validators.min(1)]),
        unit: new FormControl(''),
        totalMoney: new FormControl(''),
        orderDate: new FormControl(''),
        status: new FormControl(''),
        service: new FormControl(''),
        customerId: new FormControl(''),
      },
    );
  }

  getAllService(){
    this.serviceService.getAllServices().subscribe(data =>{
      this.services = data
    });
  }

  submit(){
    if (this.orderServiceCreateForm.valid){
      this.orderServiceService.create(this.orderServiceCreateForm.value).subscribe(res => {
        this.router.navigate(['order/list-order'])
      });
      console.log(this.orderService)
    }
  }

  refresh(): void {
    window.location.reload();
  }

}
