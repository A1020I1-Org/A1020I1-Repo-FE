import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../interface/Customer";
import {OrderService} from "../interface/OrderService";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

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

  getAll(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/list-order');
  }

  // getAll(): Observable<any>{
  //   return this.httpClient.get<any>(this.API_URL + '/list-order', this.httpOptions);
  // }

  getById(id: number): Observable<OrderService>{
    return this.httpClient.get<OrderService>(this.API_URL + '/' + id);
  }

  create(orderService: OrderService): Observable<any>{
    return this.httpClient.post<any>(this.API_URL + '/create-order-service/' , orderService);
  }

  // create(orderService: OrderService): Observable<any>{
  //   return this.httpClient.post<any>(this.API_URL + '/create-order-service/' , orderService, this.httpOptions);
  // }

  edit(id: string, orderService: OrderService): Observable<any>{
    return this.httpClient.put<any>(this.API_URL + '/edit' + '/' + id, orderService);
  }
}
