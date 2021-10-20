import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosition} from "../interface/IPosition";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private baseURL = 'http://localhost:8080/employee/listPosition';
  constructor(
    private http: HttpClient
  ) {
  }
  findAll(): Observable<IPosition[]>{
    return this.http.get<IPosition[]>(this.baseURL);
  }
}
