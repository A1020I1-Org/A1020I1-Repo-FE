import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IService} from "../interface/IService";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  readonly URL_LIST = "http://localhost:8080/service/listService";
  readonly URL_DELETE = "http://localhost:8080/service/deleteService";
  readonly URL_GET = "http://localhost:8080/service/getServiceById";

  constructor(
    private http: HttpClient) {
  }

  getAllService():Observable<any>{
    return this.http.get<any>(this.URL_LIST);
  }

  deleteServicesByID(servicesID: string): Observable<any>{
    return this.http.delete<IService>(this.URL_DELETE + '/' + servicesID);
  }

  getServicesById(servicesID: string):Observable<any>{
    return this.http.get<IService>(this.URL_GET + '/' + servicesID);
  }
}
