import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {PositionService} from "../../services/position.service";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  positionList: any;
  viewEmployeeForm!: FormGroup;
  id!: string;


  constructor(private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeService,
              private positionService: PositionService) { }

  ngOnInit(): void {
    this.viewEmployeeForm = new FormGroup({
      idEmp: new FormControl(''),
      fullName: new FormControl(''),
      position: new FormControl(''),
      email: new FormControl(''),
      dateOfBirth: new FormControl(''),
      startWorkDate: new FormControl(''),
      phone: new FormControl(''),
      level: new FormControl(''),
      yearOfExp: new FormControl(''),
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
    this.positionService.findAll().subscribe((data) =>{
      this.positionList= data;
    });
  }
  compareFn(val1: any, val2: any): boolean{
    return val1.positionId === val2.positionId;
  }


}
