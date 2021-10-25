import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../interface/Customer";
import {OrderService} from "../interface/OrderService";

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private API_URL = 'http://localhost:8080/order';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get<any>(this.API_URL + '/list-order');
  }

  getById(id: number): Observable<OrderService>{
    return this.httpClient.get<OrderService>(this.API_URL + '/' + id);
  }

  create(orderService: OrderService): Observable<any>{
    return this.httpClient.post<any>(this.API_URL + '/create-order-service/' , orderService);
  }

  edit(id: string, orderService: OrderService): Observable<any>{
    return this.httpClient.put<any>(this.API_URL + '/edit' + '/' + id, orderService);
  }
}
