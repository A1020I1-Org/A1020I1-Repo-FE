import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";
import {Customer} from "../../entity/Customer";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customerLogined!: Customer;
  role!:string;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService,private router:Router) {
  }

  ngOnInit(): void {
    this.customerLogined = this.tokenStorage.getUser().customer;
  }

  signOut() {
    this.tokenStorage.signOut();
    this.router.navigateByUrl('login');
  }

}
