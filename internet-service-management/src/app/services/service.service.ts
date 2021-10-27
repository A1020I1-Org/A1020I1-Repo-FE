import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IService} from "../interface/IService";
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API:string = "http://localhost:8080/service";
  statusSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.statusSource.asObservable();

  constructor(
    private http: HttpClient) {
  }

  getAllService():Observable<any>{
    return this.http.get<any>(this.API+'/list');
  }

  deleteServicesByID(servicesID: string): Observable<any>{
    return this.http.delete<any>(this.API + '/delete/' + servicesID);
  }
  deleteAllServices(): Observable<any>{
    return this.http.delete<any>(this.API + '/deleteAll');
  }

  getServicesById(servicesID: string):Observable<IService>{
    return this.http.get<IService>(this.API + '/list/' + servicesID);
  }

  search(searchName:string):Observable<IService[]>{
    return this.http.get<IService[]>(this.API + '/search' +'?searchName=' + searchName
    );
  };

  getPageList(pageNum: number,searchName:string):Observable<any>{
    const url = this.API + '/search' + '?page=' + pageNum +'&searchName=' + searchName;
    return this.http.get<any>(url);
  }

  addOrUpdate(formGroup: FormGroup, action: any): Observable<any> {
    const id = formGroup.controls.serviceId.value;
    if (action == "add") {
      return this.http.post(this.API + '/create', formGroup.value);
    } else {
      return this.http.patch(this.API + `/update/${id}`, formGroup.value);
    }
  }
}
