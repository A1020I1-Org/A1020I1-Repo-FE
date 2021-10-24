import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../interface/Service";
import {OrderService} from "../../interface/OrderService";
import {ServiceService} from "../../services/service.service";
import {Router} from "@angular/router";
import {ageValidator, passwordConfirm} from "../../customer/customer.validator";

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
    this.orderServiceCreateForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        quantity: new FormControl('', [Validators.required]),
        unit: new FormControl(''),
        totalMoney: new FormControl(''),
        orderDate: new FormControl(''),
        status: new FormControl('', [Validators.required]),
        service: new FormControl('', [Validators.required, Validators.pattern("^([0-9]{10}|[0-9]{12})$")]),
        customer: new FormControl('', [Validators.required, ageValidator(16)]),

      },
    );



  }

  getAllService(){
    this.serviceService.getAllServices().subscribe(data =>{
      this.services = data
    });
  }

}
