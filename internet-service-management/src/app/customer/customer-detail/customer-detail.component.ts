import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICustomer} from "../../interface/ICustomer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public customerEditForm!: FormGroup;
  public idCustomer: any;
  customer!: ICustomer;

  constructor(public formBuilder:FormBuilder,
              public customerService: CustomerService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.customerEditForm = this.formBuilder.group({
      'id': [],
      'customerId': [''],
      'fullName': ['', [Validators.required]],
      'dateOfBirth': ['', [Validators.required]],
      'phone': ['', [Validators.required, Validators.pattern('^((\\(84\\)\\+)|(0))((91)|(90))[\\d]{7}$')]],
      'email': ['', [Validators.required, Validators.email]],
      'address': ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe(data =>{
      this.idCustomer = data.id;
      this.customerService.getCustomerById(this.idCustomer).subscribe(customer  =>{
        this.customer = customer
      })
    })
  }

  editCustomer() {
    this.customerService.editCustomer(this.customerEditForm.value, this.idCustomer).subscribe(data =>{
      // this.router.navigateByUrl('customer-detail').then(r => {});
    })
  }

}
