import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {AddressService} from "../../service/address.service";
import {IProvince} from "../../interface/IProvince";
import {IDistrict} from "../../interface/IDistrict";
import {IWard} from "../../interface/IWard";


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  positionList: any;
  provinces: IProvince[] = [];
  districts: IDistrict[] = [];
  wards: IWard[] = [];
  temp: string = "";
  province: IProvince = {};
  id!: string;
  viewEmployeeForm!: FormGroup;


  constructor(private employeeService : EmployeeService,
              private positionService: PositionService,
              private addressService: AddressService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProvince();
    this.getPositionList();
    this.viewEmployeeForm = new FormGroup({
      employeeId: new FormControl(),
      fullName: new FormControl(),
      position: new FormControl(),
      email: new FormControl(),
      dateOfBirth: new FormControl(),
      startWorkDate: new FormControl(),
      phone: new FormControl(),
      level: new FormControl(),
      yearOfExp: new FormControl(),
      address: new FormGroup({
        province: new FormControl(''),
        district: new FormControl(''),
        ward: new FormControl('')
      }),

      avtUrl: new FormControl(''),
      userName: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl('')
    });
    this.activatedRoute.paramMap.subscribe((paramMap) =>{
      this.employeeService.getEmployeeById("NV-1111").subscribe((data =>{
        let addressArr = data.address.split(',');
        this.getAllDistrict(addressArr[0]);
        this.getAllWard(addressArr[1]);
        this.viewEmployeeForm.patchValue({
          employeeId: data.employeeId,
          fullName: data.fullName,
          position: data.positionId,
          dateOfBirth: data.dateOfBirth,
          email: data.email,
          address: {
            province: addressArr[0],
            district: addressArr[1],
            ward: addressArr[2]
          },
          phone: data.phone,
          startWorkDate: data.startWorkDate,
          level: data.level,
          yearOfExp: data.yearOfExp,
          userName: data.userName,
          password: data.password,
          avtUrl: data.avtUrl
        });
      }))
    });
  }

  getAllProvince(){
    this.addressService.getAllProvince().subscribe(data =>{
        this.provinces = data.results;
      },
      error => {
        console.log("can not province");
      }
    )
  }
  getAllDistrict(province: string){
    console.log(province)
    this.temp = province.split("&")[1];
    this.addressService.getAllDistrict(this.temp).subscribe(data =>{
        this.districts = data.results;
        this.wards = [];
      },
      error => {
        console.log("can not district");
      }
    )
  }

  getAllWard(district: string){
    console.log(district)
    this.temp = district.split("&")[1];
    this.addressService.getAllWard(this.temp).subscribe(data =>{
        this.wards = data.results;
      },
      error => {
        console.log("can not district");
      })
  }



  compareFn(val1: any, val2: any): boolean {
    return val1 && val2 ? val1.positionId === val2.positionId : val1 === val2;
  }

  private getPositionList() {
    this.positionService.getPositionList().subscribe(data =>{
      this.positionList = data;
    })
  }

}
