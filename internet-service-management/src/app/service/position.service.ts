import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private API_POSITION = 'http://localhost:8080/position/listPosition';

  constructor(private httpClient: HttpClient) {

  }
    getPositionList(): Observable<HttpEvent<any>>{
      return this.httpClient.get<any>(this.API_POSITION);
    }


}
