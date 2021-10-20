import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public  API: string = 'http://localhost:3000/services';

  constructor(public http: HttpClient) { }

  getAllServices(): Observable<any>{
    return this.http.get(this.API);
  }
}
