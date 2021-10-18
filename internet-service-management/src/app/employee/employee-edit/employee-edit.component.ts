import { Component, OnInit } from '@angular/core';
import {FileUpload} from "../../interface/FileUpload";
import {IPosition} from "../../interface/IPosition";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {Router} from "@angular/router";
import {IProvince} from "../../interface/IProvince";
import {IDistrict} from "../../interface/IDistrict";
import {IWard} from "../../interface/IWard";
import {AddressService} from "../../service/address.service";
import {validAgeValidators} from "../../share/checkAge.validation";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  positionLists!: IPosition[];
  percentage = 0;
  employeeForm!: FormGroup;
  msgCode= '';
  msgDateOfBirth = '';
  msgStartWorkDate = '';
  msgEmail = '';
  msgPassword = '';
  msgConfirmPass!: string;
  msgImage = '';
  isImage = false;
  avtUrl!: string;
  provinces: IProvince[] = [];
  districts: IDistrict[] = [];
  wards: IWard[] = [];
  temp: string = "";
  province: IProvince = {};
  employeeFormEdit: any;

  constructor(private employeeService : EmployeeService,
              private positionService: PositionService,
              private addressService: AddressService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProvince();
    this.positionService.getPositionList().subscribe(data => {
      this.positionLists = data;
    });
    this.employeeForm = new FormGroup({
      employeeId: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      position: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      dateOfBirth: new FormControl('', [Validators.required, validAgeValidators(18,35)]),
      startWorkDate: new FormControl('', [Validators.required, this.checkStartWorkDate]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^09[0-9]{9}$/)]),
      level: new FormControl('', [Validators.required, this.checkLevel]),
      yearOfExp: new FormControl('', [Validators.required, this.checkYearOfExp]),
      address: new FormControl(''),
      avtUrl: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+~])[A-Za-z\\d!@#$%^&*()_+~]{6,}')]),
      confirmPassword: new FormControl('')
    });
  }

  editEmployee() {
    this.employeeForm.value.account.userName = this.employeeForm.value.email;
    // @ts-ignore
    this.employeeService.editEmployee(this.employeeForm.value).subscribe(data => {
      // @ts-ignore
      if (data.status === false) {
        // @ts-ignore
        this.msgEmail = data.msgEmail;
        // @ts-ignore
        this.msgPassword = data.msgPassword;
        // @ts-ignore
        this.msgCode = data.msgCode;
        // @ts-ignore
        this.msgDateOfBirth = data.msgDateOfBirth;
        // @ts-ignore
        this.msgStartWorkDate = data.msgStartWorkDate;
      }
      this.router.navigateByUrl('employee-list');
    });

  }

  resetMsgDateOfBirth() {
    this.msgDateOfBirth = '';
  }

  resetMsgStartWorkDate() {
    this.msgStartWorkDate = '';
  }

  resetMsgEmail() {
    this.msgCode = '';
  }

  checkPassword(newPassword: string, confirmPassword: string) {
    if (newPassword !== confirmPassword) {
      return this.msgConfirmPass = 'Mật khẩu phải trùng với mật khẩu mới.';
    } else {
      return this.msgConfirmPass = '';
    }
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.employeeService.pushFileToStorage(this.currentFileUpload).subscribe(
          url => {
            this.avtUrl=url;
          },
          error => {
            console.log(error);
          }
        );
      }
    }
    console.log("url:"+this.currentFileUpload?.url);
  }
  getAllDistrict(province: string){
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
    this.temp = district.split("&")[1];
    this.addressService.getAllWard(this.temp).subscribe(data =>{
        this.wards = data.results;
      },
      error => {
        console.log("can not district");
      })
  }
  getAllProvince(){
    this.addressService.getAllProvince().subscribe(data =>{
        this.provinces = data.result;
      },
      error => {
        console.log("can not province");
      }
    )
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
  checkStartWorkDate(data: AbstractControl): any{
    const startWorkDate = data.value;
    const currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    if (startWorkDate < currentDate) {
      return {inValidDate: true};
    }
    return null;
  }
  checkLevel(data: AbstractControl): any {
    return data.value > 0 ? null : {invalidLevel: true};
  }

  checkYearOfExp(data: AbstractControl): any {
    return (data.value >= 0 && data.value < 50) ? null : {invalidYearOfExp: true};
  }
  compareWith(val1: any, val2: any): boolean{
    return val1.positionId === val2.positionId;
  }
}
