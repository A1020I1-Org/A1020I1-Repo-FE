import {Component, OnInit} from '@angular/core';
import {IProvince} from "../../interface/IProvince";
import {IDistrict} from "../../interface/IDistrict";
import {IWard} from "../../interface/IWard";
import {AddressService} from "../../services/AddressService";
import {CustomerRegister} from "../../model/CustomerRegister";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regexUnicode} from "../../share/regexNameVn";
import {validAgeValidators} from "../../share/valid-age.validators";
import validate = WebAssembly.validate;
import {validPasswordValidators} from "../../share/valid-password.validators";
import {IUserName} from "../../interface/IUserName";
import {RegisterService} from "../../services/RegisterService";
import {validUserNameValidators} from "../../share/valid-user-name.validators";

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
  customerRegister !: CustomerRegister;
  registerForm !: FormGroup;
  checkUserName: boolean = false;
  address: string = "";
  id : number = 1;

  constructor(private _addressService: AddressService,
              private _registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.getAllProvince();
    this.registerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.pattern(regexUnicode)]),
      dateOfBirth: new FormControl('', [Validators.required, validAgeValidators(16, 100)]),
      idCard: new FormControl('', [Validators.required, Validators.pattern("^(([0-9]{12})|([0-9]{9})){1}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^(090)|(091)[0-9]{7}$")]),
      email:new FormControl('',[Validators.required,Validators.email]),
      province: new FormControl(' '),
      district: new FormControl(' '),
      ward: new FormControl(' '),
      userName: new FormControl('', [Validators.required, Validators.minLength(4),
        Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$")]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: [validPasswordValidators("password", "confirmPassword")]})
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

  checkUser(event: any) {
    this._registerService.checkUser(event.target.value).subscribe(
      data => {
        console.log(data);
        this.checkUserName = data;
      }
    )
  }

  onSubmit() {
    this.id = Math.random()*1000;
    const formValue = this.registerForm.value;
    this.address = formValue.ward + ', ' + formValue.district.split("&")[0] + ', ' + formValue.province.split("&")[0];
    this.customerRegister = new CustomerRegister(this.id,formValue.fullName,formValue.dateOfBirth,
      formValue.email,this.address,formValue.phone,true,formValue.idCard,formValue.userName,formValue.password)
    this._registerService.register(this.customerRegister).subscribe(data=>{
        console.log(data);
    },error => {
      console.log(error)
    });
    console.log(this.customerRegister);
  }
}
