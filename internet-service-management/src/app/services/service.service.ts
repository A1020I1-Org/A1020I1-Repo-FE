import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private API_URL = 'http://localhost:8080/order/list';

  constructor(private httpClient: HttpClient) { }

  getAllServices(): Observable<any>{
    return this.httpClient.get(this.API_URL);
  }
}
