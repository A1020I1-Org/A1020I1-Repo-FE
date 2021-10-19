import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "../interface/service";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiService: string = "http://localhost:8080/service";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.apiService + '/list-test');
  }
  getPage(): Observable<any>{
    return this.httpClient.get<any>(this.apiService + '/list');
  }

  addOrUpdate(formGroup: FormGroup, action: any): Observable<any>{
    const id = formGroup.controls.serviceId.value;
    if (action == "add"){
      return this.httpClient.post(this.apiService + '/create', formGroup.value);
    }else {
      return this.httpClient.patch(this.apiService + `/update/${id}`, formGroup.value);
    }
  }
}
