import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IService} from "../interface/IService";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API:string = "http://localhost:8080/service";

  constructor(
    private http: HttpClient) {
  }

  getAllService():Observable<any>{
    return this.http.get<any>(this.API+'/list');
  }

  deleteServicesByID(servicesID: string): Observable<any>{
    return this.http.delete<any>(this.API + '/delete/' + servicesID);
  }

  getServicesById(servicesID: string):Observable<IService>{
    return this.http.get<IService>(this.API + '/list/' + servicesID);
  }

  search(nameSearch:string):Observable<IService>{
    // @ts-ignore
    return this.http.get(this.API + '/search' +'?serviceName_like=' + nameSearch
    );
  };
}
