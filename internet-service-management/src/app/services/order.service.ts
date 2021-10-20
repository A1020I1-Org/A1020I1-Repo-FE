import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public  API: string = 'http://localhost:3000/orderServices';

  constructor(public http: HttpClient) { }

  getAllOrderList(): Observable<any>{
    return this.http.get(this.API);
  }

  getOrderById(orderId: any): Observable<any>{
    return this.http.get(this.API + '/' + orderId);
  }

  deleteOrder(orderId: any): Observable<any>{
    return this.http.delete(this.API + '/' + orderId);
  }

  addNewOrder(order: any): Observable<any>{
    return  this.http.post(this.API, order)
  }
}
