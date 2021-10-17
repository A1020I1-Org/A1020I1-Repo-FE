import {Component, OnInit} from '@angular/core';
import {IProvince} from "../../interface/IProvince";
import {IDistrict} from "../../interface/IDistrict";
import {IWard} from "../../interface/IWard";
import {AddressService} from "../../services/AddressService";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  provinces: IProvince[] = [];
  districts: IDistrict[] = [];
  wards: IWard[] = [];
  province: IProvince = {};
  temp: string = "";

  constructor(private _addressService: AddressService) {
  }

  ngOnInit(): void {
    this.getAllProvince();
  }

  getAllProvince() {
    this._addressService.getAllProvince().subscribe(
      data => {
        this.provinces = data.results;
      },
      error => {
        console.log("can not get province");
      }
    )
  }

  getAllDistrict(province: string) {
    this.temp = province.split("&")[1];
    this._addressService.getAllDistrict(this.temp).subscribe(
      data => {
        this.districts = data.results;
        this.wards = [];
      },
      error => {
        console.log("can not get district");
      }
    )
  }

  getAllWard(district: string) {
    this.temp = district.split("&")[1];
    this._addressService.getAllWard(this.temp).subscribe(
      data => {
        this.wards = data.results;
      },
      error => {
        console.log("can not get district");
      }
    )
  }
}
