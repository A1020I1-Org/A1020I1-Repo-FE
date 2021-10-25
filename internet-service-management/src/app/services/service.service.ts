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

  constructor(private httpClient: HttpClient) { }

  getAllServices(): Observable<any>{
    return this.httpClient.get(this.API_URL + "/list");
  }

  getById(id: number): Observable<Service>{
    return this.httpClient.get<Service>(this.API_URL + '/service/' + id);
  }
}
