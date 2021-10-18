import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IService} from "../interface/IService";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API:string = "http://localhost:8080/service";
  statusSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.statusSource.asObservable();

  constructor(
    private http: HttpClient) {
  }

  statusDelete(status:boolean){
    this.statusSource.next(status);
  }

  getAllService():Observable<any>{
    return this.http.get<any>(this.API+'/list');
  }

  deleteServicesByID(servicesID: string): Observable<any>{
    return this.http.delete<any>(this.API + '/delete/' + servicesID);
  }

  getServicesById(servicesID: string):Observable<IService>{
    return this.http.get<IService>(this.API + '/list/' + servicesID);
  }

  search(nameSearch:string):Observable<IService[]>{
    return this.http.get<IService[]>(this.API + '/search' +'?serviceName_like=' + nameSearch
    );
  };

  getPageList(pageNum:number):Observable<any>{
    const url = `${this.API}/list?page=${pageNum}`;
    return this.http.get<any>(url);
  }
}
