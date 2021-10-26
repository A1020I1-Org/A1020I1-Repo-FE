import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../interface/Customer";
import {Service} from "../interface/Service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL = 'http://localhost:8080/order';
  httpOptions: any;
  constructor(private httpClient: HttpClient) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer` + this.tokenStorage.getToken(),
    //     'Access-Control-Allow-Origin': 'http://localhost:4200',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //   }),
    // };
  }

  getAllServices(): Observable<any>{
    return this.httpClient.get(this.API_URL + "/list");
  }

  // getAllServices(): Observable<any>{
  //   return this.httpClient.get(this.API_URL + "/list", this.httpOptions);
  // }

  getById(id: number): Observable<Service>{
    return this.httpClient.get<Service>(this.API_URL + '/service/' + id);
  }

  // getById(id: number): Observable<Service>{
  //   return this.httpClient.get<Service>(this.API_URL + '/service/' + id, this.httpOptions);
  // }
}
