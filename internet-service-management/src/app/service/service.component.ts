import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {ServiceService} from "../services/service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Service} from "../interface/service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit, AfterContentChecked {

  formGroupForAdd: FormGroup[] = [];
  formGroupForUpdate: FormGroup[] = [];
  serviceArr: Service[] = [];
  serviceArrCheck: Service[] = [];
  serviceArrForUpdate: Service[] = [];

  sttForm: number = 0;
  btnAddHidden: boolean = true;
  btnEditHidden: boolean = true;
  confirmHaveErr: boolean = true;

  constructor(
    private serviceService: ServiceService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getAllService();
  }

  getAllService() {

    // data page here
    this.serviceService.getPage().subscribe(
      (data) => {
        let serviceArrayTam: Service[] = data.content;
        console.log(serviceArrayTam);
      }
    );


    this.serviceService.getAll().subscribe(
      (data) => {
        this.serviceArr = data
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.serviceArrCheck = [];
        this.serviceArrForUpdate = [];
        this.serviceArr.forEach(
          (o, i, a) => {
            this.serviceArrForUpdate.push(o);
            this.serviceArrCheck.push(o);
          }
        );

        for (let i = 0; i < this.serviceArrForUpdate.length; i++){
          if (this.formGroupForUpdate[i]){
            continue
          }
          this.formGroupForUpdate[i] = this.formBuilder.group({
            serviceId: ['', [Validators.pattern("^SV\\d{4}$"), Validators.required]],
            serviceName: ['', [Validators.required]],
            quantity: ['', [Validators.required]],
            unit: ['', [Validators.required]],
            prices: ['', [Validators.required]]
          });
        }

        this.serviceArrCheck.forEach(
          (o, i) => {
            if (o.serviceId == ''){
              this.serviceArrCheck[i] = this.serviceArr[i];
            }
          }
        );
      }
    );

  }

  btnAddService() {
    this.btnAddHidden = false;
    this.btnEditHidden = true;

    // this.serviceArr.forEach(
    //   (o, i, a) => {
    //     this.serviceArrCheck[i] = this.serviceArr[i];
    //     this.formGroupForUpdate[i] = this.formBuilder.group({
    //       serviceId: ['',[Validators.pattern("^SV\\d{4}$"), Validators.required]],
    //       serviceName: ['', Validators.required],
    //       quantity: [''],
    //       unit: [''],
    //       prices: ['']
    //     });
    //   }
    // );
    this.ngOnInit();

    for (let i = 0; i <= this.sttForm; i++) {
      if (this.formGroupForAdd[i]){
        continue
      }
      this.formGroupForAdd[i] = this.formBuilder.group({
        serviceId: ['',[Validators.pattern("^SV\\d{4}$"), Validators.required]],
        serviceName: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        unit: ['', [Validators.required]],
        prices: ['', [Validators.required]]
      });
    }
    this.sttForm++;
    console.log('btnAddService');
  }

  cancelAddService(event: any) {
    this.formGroupForAdd.splice(event.closest('tr').id, 1);
    this.sttForm--;

    if (this.sttForm == 0){
      this.btnAddHidden = true;
      this.formGroupForAdd = [];
    }
    console.log('cancel');
  }

  submitAddService() {
    this.btnAddHidden = true;
    this.btnEditHidden = true;

    if (this.formGroupForAdd.length > 0) {
      for (let i = 0; i < this.formGroupForAdd.length; i++) {
        this.serviceArr.push(this.formGroupForAdd[i].value);
        this.serviceArrCheck.push(this.formGroupForAdd[i].value);
        this.serviceArrForUpdate.push(this.formGroupForAdd[i].value);
        this.serviceService.addOrUpdate(this.formGroupForAdd[i]).subscribe(
          (data) => {},
          (err) => {},
          () => {
            this.ngOnInit();
          }
        );
      }
    }
    this.formGroupForAdd = [];
    this.sttForm = 0;

    console.log('submitAddService');
  }

  btnEditService(index: any) {
    this.formGroupForAdd = [];
    this.sttForm = 0;
    this.btnAddHidden = true;
    this.btnEditHidden = false;

    this.serviceArrCheck[index] = {serviceId: '', serviceName: '', quantity: 0, unit: '', prices: 0};
    for (let i = 0; i < this.serviceArrForUpdate.length; i++){

      if (i == index){
        this.formGroupForUpdate[i] = this.formBuilder.group({
          serviceId: [this.serviceArrForUpdate[i].serviceId, [Validators.pattern("^SV\\d{4}$"), Validators.required]],
          serviceName: [this.serviceArrForUpdate[i].serviceName, [Validators.required]],
          quantity: [this.serviceArrForUpdate[i].quantity, [Validators.required]],
          unit: [this.serviceArrForUpdate[i].unit, [Validators.required]],
          prices: [this.serviceArrForUpdate[i].prices, [Validators.required]]
        });
      }
    }

    console.log('btnEditService');
  }

  cancelEditService(index: any) {
    this.serviceArrCheck[index] = this.serviceArr[index];
    this.formGroupForUpdate[index] = this.formBuilder.group({
      serviceId: ['',[Validators.pattern("^SV\\d{4}$"), Validators.required]],
      serviceName: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      prices: ['', [Validators.required]]
    });

    let countFormGroupForUpdateExist: number = 0;
    this.formGroupForUpdate.forEach(
      (o, i) => {
        if (o.get('serviceId')?.value != ''){
          countFormGroupForUpdateExist++
        }
      }
    );
    if (countFormGroupForUpdateExist == 0){
      this.btnEditHidden = true;
    }

    console.log(this.formGroupForUpdate);
  }

  submitEditService() {
    this.btnAddHidden = true;
    this.btnEditHidden = true;

    this.formGroupForUpdate.forEach(
      (o, i) => {
        this.serviceArrCheck[i] = {serviceId: '', serviceName: '', quantity: 0, unit: '', prices: 0};
        if (o.get('serviceId')?.value != ''){
          this.serviceService.addOrUpdate(this.formGroupForUpdate[i]).subscribe(
            (data) => {},
            (err) => {},
            () => {
              this.ngOnInit();
              this.btnAddHidden = true;
              this.btnEditHidden = true;
            }
          );

          this.serviceArr[i].serviceName = this.formGroupForUpdate[i].controls.serviceName.value;
          this.serviceArr[i].quantity = parseInt(this.formGroupForUpdate[i].controls.quantity.value);
          this.serviceArr[i].unit = this.formGroupForUpdate[i].controls.unit.value;
          this.serviceArr[i].prices = parseInt(this.formGroupForUpdate[i].controls.prices.value);

          this.serviceArrCheck[i].serviceId = '';
          this.serviceArrCheck[i].serviceName = '';
          this.serviceArrCheck[i].quantity = 0;
          this.serviceArrCheck[i].unit = '';
          this.serviceArrCheck[i].prices = 0;

          this.formGroupForUpdate[i] = this.formBuilder.group({
            serviceId: ['',[Validators.pattern("^SV\\d{4}$"), Validators.required]],
            serviceName: [''],
            quantity: [''],
            unit: [''],
            prices: ['']
          });
        }
      }
    );

    console.log(this.serviceArrCheck);
    console.log(this.serviceArr);
  }

  ngAfterContentChecked(): void {
    if (this.formGroupForAdd.length > 0){
      for (let i = 0; i < this.formGroupForAdd.length; i++){
        if (this.formGroupForAdd[i].invalid){
          this.confirmHaveErr = true;
        }else {
          this.confirmHaveErr = false;
        }
      }
    }

    let countDataNeedUpdate = 0;
    this.formGroupForUpdate.forEach(
      (o) => {
        if (o.get('serviceId')?.value != ''){
          countDataNeedUpdate++;
        }
      }
    );

    if (countDataNeedUpdate > 0){
      for (let i = 0; i < this.formGroupForUpdate.length; i++){
        if (this.formGroupForUpdate[i].get('serviceId')?.value != ''){
          if (this.formGroupForUpdate[i].invalid){
            this.confirmHaveErr = true;
          }else {
            this.confirmHaveErr = false;
          }
        }
      }
    }

    console.log('ngAfterContentChecked');
  }

}
