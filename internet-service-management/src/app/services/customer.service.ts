import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../interface/Customer";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  create(customer: Customer): Observable<any>{
      return this.httpClient.post<any>(this.API_URL + '/create', customer);
  }

  edit(id: number, customer: Customer): Observable<any>{
    return this.httpClient.put<any>(this.API_URL + '/edit' + '/' + id, customer);
  }

}

