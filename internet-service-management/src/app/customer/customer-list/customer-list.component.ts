import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../interface/ICustomer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers!: ICustomer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data => {
        this.customers = data;
        console.log(this.customers);
      },
      error => {
        console.log("CÓ lỗi xảy ra!")
      });
  }

}
