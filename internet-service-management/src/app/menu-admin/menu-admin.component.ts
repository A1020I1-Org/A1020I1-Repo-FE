import { Component, OnInit } from '@angular/core';
import {LoadJsService} from "../service/load-js.service";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  employeeLogined!: any;

  constructor(private loadjs: LoadJsService) {
    this.loadjs.loadScript('assets/js/menu_left.js');
  }

  ngOnInit(): void {
    // this.employeeLogined = this.tokenStorage.getUser().employee;
  }

  signOut() {
    // this.tokenStorage.signOut();
    // this.router.navigateByUrl('/login');
  }

}
