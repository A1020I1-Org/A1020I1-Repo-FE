import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComputer} from "../interface/IComputer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computer!: IComputer[];
  readonly URL_LIST = "http://localhost:8080/computer/listComputer";
  readonly URL_DELETE = "http://localhost:8080/computer/deleteComputer";
  readonly URL_GET = "http://localhost:8080/computer/getInforComputer";
  constructor(private httpClient: HttpClient) { }
  getAllComputer():Observable<any>{
    return this.httpClient.get<any>(this.URL_LIST);
  }
  deleteComputer(id:string):Observable<IComputer>{
    return this.httpClient.delete<IComputer>(this.URL_DELETE + '/' + id);
  }
  getComputerById(id:string):Observable<IComputer>{
    return this.httpClient.get<IComputer>(this.URL_GET+ '/' + id);
  }
}
