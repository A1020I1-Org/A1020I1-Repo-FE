import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Customer} from "../interface/Customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:8080/customer';

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

  getById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  // getById(id: number): Observable<Customer>{
  //   return this.httpClient.get<Customer>(this.API_URL + '/' + id, this.httpOptions);
  // }

  create(customer: Customer): Observable<any>{
      return this.httpClient.post<any>(this.API_URL + '/create', customer);
  }

  // create(customer: Customer): Observable<any>{
  //   return this.httpClient.post<any>(this.API_URL + '/create', customer, this.httpOptions);
  // }

  edit(id: number, customer: Customer): Observable<any>{
    return this.httpClient.put<any>(this.API_URL + '/edit' + '/' + id, customer);
  }

  // edit(id: number, customer: Customer): Observable<any>{
  //   return this.httpClient.put<any>(this.API_URL + '/edit' + '/' + id, customer, this.httpOptions);
  // }

}

