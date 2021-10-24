import {Component, OnInit} from '@angular/core';
import {ComputerService} from "../../service/computer.service";
import {ManufacturerService} from "../../service/manufacturer.service";
import {StatusService} from "../../service/status.service";
import {TypeService} from "../../service/type.service";
import {Router} from "@angular/router";
import {IManufacturer} from "../../interface/IManufacturer";
import {IStatus} from "../../interface/IStatus";
import {IType} from "../../interface/IType";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-computer-create',
  templateUrl: './computer-create.component.html',
  styleUrls: ['./computer-create.component.css']
})
export class ComputerCreateComponent implements OnInit {

  constructor(private _computerService: ComputerService, private _manufacturerService: ManufacturerService,
              private _statusService: StatusService, private _typeService: TypeService, private router: Router) {
  }

  listManufacturer!: IManufacturer[];
  listStatus!: IStatus[];
  listType!: IType[];

  createForm = new FormGroup({
      computerId: new FormControl('', [Validators.required, Validators.pattern("")])
    }
  );

  createComputer() {
    this._computerService.create(this.createForm.value).subscribe();
    this.router.navigateByUrl('computer-list');
  }

  ngOnInit(): void {

    this._manufacturerService.getAllManufacturer().subscribe(data => {
      // @ts-ignore
      this.listManufacturer = data;
    });

    this._statusService.getAllStatus().subscribe(data => {
      // @ts-ignore
      this.listStatus = data;
    });

    this._typeService.getAllType().subscribe(data => {
      // @ts-ignore
      this.listType = data;
    });
  }

}
