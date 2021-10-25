import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective, NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {Router} from "@angular/router";
import {Customer} from "../../interface/Customer";
import {ageValidator, passwordConfirm} from "../customer.validator";
import {Province} from "../../interface/Province";
import {District} from "../../interface/District";
import {Commune} from "../../interface/Commune";
import {AddressSelectService} from "../../services/address-select.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  provinces: Province[] = [];
  districts: District[] = [];
  communes: Commune[] = [];
  temp: string = "";

  constructor(public customerService: CustomerService,
              public addressSelectService: AddressSelectService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProvince();
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      province: new FormControl(''),
      district: new FormControl(''),
      commune: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^([0-9]{10}|[0-9]{12})$")]),
      dateOfBirth: new FormControl('', [Validators.required, ageValidator(16)]),
      status: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$")]),
      passwordRetype: new FormControl('', [Validators.required])
      },
      {
        validators: [passwordConfirm("password", "passwordRetype")]
      }
      );
  }


  getAllProvince(){
    this.addressSelectService.getAllProvince().subscribe(data =>{
        this.provinces = data.results;
      },
      error => {
        console.log("Cant get provinces");
      }
    )
  }
  getAllDistrict(province: string){
    this.temp = province.split("&")[1];
    this.addressSelectService.getAllDistrict(this.temp).subscribe(data =>{
        this.districts = data.results;
        this.communes = [];
      },
      error => {
        console.log("Cant get districts");
      }
    )
  }

  getAllWard(district: string){
    this.temp = district.split("&")[1];
    this.addressSelectService.getAllCommune(this.temp).subscribe(data =>{
        this.communes = data.results;
      },
      error => {
        console.log("Cant get communes");
      })
  }


  get f(){
    return this.form.controls;
  }

  compareFn(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.customerId === c2.customerId : c1 === c2;
  }

  submit(){
    if (this.form.valid){
      this.customerService.create(this.form.value).subscribe(res => {
        // this.router.navigate(['customer/create'])
      })
    }
  }
}
