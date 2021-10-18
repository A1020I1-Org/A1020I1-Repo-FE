import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../service/employee.service";
import {PositionService} from "../../service/position.service";
import {validAgeValidators} from "../../share/checkAge.validation";
import {IEmployee} from "../../interface/IEmployee";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  positionList: any;
  viewEmployeeForm!: FormGroup;
  id!: string;


  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private positionService: PositionService) { }

  ngOnInit(): void {
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
      address: new FormControl(''),
      avtUrl: new FormControl(''),
    });
    this.activatedRoute.paramMap.subscribe((paramMap) =>{
      // @ts-ignore
      this.id = paramMap.get('id');
      console.log(paramMap.get('id'));
      this.employeeService.getEmployeeById(this.id).subscribe((data =>{
        console.log(data);
        this.viewEmployeeForm.patchValue(data);
      }
      ))
    });
    this.positionService.getPositionList().subscribe((data) =>{
      this.positionList= data;
    });
  }
  compareFn(val1: any, val2: any): boolean{
    return val1.positionId === val2.positionId;
  }

}
