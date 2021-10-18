import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomer} from "../interface/ICustomer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public  API: string = 'http://localhost:3000/customers';

  constructor(public http: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.API);
  }

  getCustomerById(customerId: number): Observable<ICustomer>{
    return this.http.get<ICustomer>(this.API + '/' + customerId);
  }

  editCustomer(customer:ICustomer, idCustomer: number):Observable<ICustomer>{
    return this.http.put<ICustomer>(this.API + '/' + idCustomer, customer);
  }
}
