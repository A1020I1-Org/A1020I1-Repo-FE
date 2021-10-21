import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DeleteEmployeeComponent} from "../delete-employee/delete-employee.component";
import {IPosition} from "../../interface/IPosition";
import {IEmployee} from '../../interface/IEmployee';
import {EmployeeService} from "../../services/employee.service";
import {PositionService} from "../../services/position.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertService} from "../alert.service";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  // @ts-ignore
  employeeList: IEmployee[] = [];
  addressList: string[] = [];
  positionList: IPosition[] | undefined;
  p: any;
  page = 0;
  searchEmployee!: FormGroup;
  pageable: any;

  constructor(private dialog: MatDialog, private employeeService: EmployeeService,
              private positionService: PositionService,private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getList();
    this.searchEmployee = new FormGroup({
      idEmp: new FormControl(''),
      dateStart: new FormControl(''),
      dateEnd: new FormControl(''),
      workStart: new FormControl(''),
      workEnd: new FormControl(''),
      address: new FormControl(''),
      positionId: new FormControl(''),
    })
  };
  getList() {
    this.employeeService.getAllEmployee(this.page).toPromise().then(r => {
      this.employeeList = r.content;
      this.pageable = r.totalPages;
    });

    this.employeeService.getAllAddress().toPromise().then(r => {
      this.addressList = r;
    });
    this.positionService.findAll().toPromise().then(r => {
      this.positionList = r;
    });
  }

  delete(id: string) {
    const dialog = this.dialog.open(DeleteEmployeeComponent, {
      width: '500px',
      data: {employeeId: id}
    });
    dialog.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  search() {
    if (this.searchEmployee.value.dateStart == '') {
      this.searchEmployee.value.dateStart = '1000-01-01';
    }
    if (this.searchEmployee.value.dateEnd == '') {
      this.searchEmployee.value.dateEnd = '9999-01-01';
    }
    if (this.searchEmployee.value.workStart == '') {
      this.searchEmployee.value.workStart = '1000-01-01';
    }
    if (this.searchEmployee.value.workEnd == '') {
      this.searchEmployee.value.workEnd = '9999-01-01';
    }
    if (this.searchEmployee.value.idEmp == '') {
      this.searchEmployee.value.idEmp = "";
    }
    this.employeeService.searchEmployee(this.searchEmployee.value.idEmp, this.searchEmployee.value.dateStart, this.searchEmployee.value.dateEnd,
      this.searchEmployee.value.workStart, this.searchEmployee.value.workEnd,
      this.searchEmployee.value.address, this.searchEmployee.value.positionId)
      .subscribe((data) => {
        this.employeeList = data.content;
      },() => {
        this.alertService.showMessageErrors('Không tìm thấy!');
      })
  };

  pageRefresh() {
    this.ngOnInit();
  }

  searchEP($event: any) {
    if (this.searchEmployee.value.dateStart == '') {
      this.searchEmployee.value.dateStart = '1000-01-01';
    }
    if (this.searchEmployee.value.dateEnd == '') {
      this.searchEmployee.value.dateEnd = '9999-01-01';
    }
    if (this.searchEmployee.value.workStart == '') {
      this.searchEmployee.value.workStart = '1000-01-01';
    }
    if (this.searchEmployee.value.workEnd == '') {
      this.searchEmployee.value.workEnd = '9999-01-01';
    }
    this.employeeService.searchEmployee(this.searchEmployee.value.idEmp.trim(), this.searchEmployee.value.dateStart, this.searchEmployee.value.dateEnd,
      this.searchEmployee.value.workStart, this.searchEmployee.value.workEnd,
      this.searchEmployee.value.address, this.searchEmployee.value.positionId)
      .subscribe((data) => {
        this.employeeList = data.content;
      })
  }
}
