import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Customer} from "../../entity/Customer";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerLogined!: Customer;
  role!:string;
  constructor(private userService: UserService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.customerLogined = this.tokenStorage.getUser().customer;
    this.role=this.tokenStorage.getUser().roles;
  }

  signOut() {
    this.tokenStorage.signOut();
    window.location.href = "http://localhost:4200";
  }

}
