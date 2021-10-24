import { Injectable } from '@angular/core';
import {Province} from "../interface/Province";
import {District} from "../interface/District";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressSelectService {
  private readonly API_URL = 'https://vapi.vnappmob.com/api';

  constructor(private _httpClient: HttpClient) {
  }

  getAllProvince(): Observable<any> {
    return this._httpClient.get<any>(this.API_URL+'/province' );
  }

  getAllDistrict(id: string|undefined): Observable<any> {
    const url = `${this.API_URL}/province/district/${id}`;
    return this._httpClient.get<any>(url);
  }

  getAllCommune(id:string|undefined):Observable<any>{
    const url = `${this.API_URL}/province/ward/${id}`;
    return this._httpClient.get<any>(url);
  }
}
