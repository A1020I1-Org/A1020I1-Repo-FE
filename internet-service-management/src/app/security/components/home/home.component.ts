import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Customer} from "../../entity/Customer";
import {TokenStorageService} from "../../service/token-storage.service";
import {Router} from "@angular/router";
import {Orders} from "../../entity/Orders";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  customerLogined!: Customer;
  role!: string;
  orders: any;
  orders_item!: Orders;
  startTime!: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) {

  }

  ngOnInit(): void {
    this.customerLogined = this.tokenStorage.getUser().customer;
    this.orders = this.tokenStorage.getUser().customer.orders;
    for (let item of this.orders) {
      this.orders_item = item
    }
    this.role = this.tokenStorage.getUser().roles;
  }


  signOut() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/login');
  }

}
