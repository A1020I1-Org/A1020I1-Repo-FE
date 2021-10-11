import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComputer} from "../interface/IComputer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computer!: IComputer[];
  readonly URL_LIST = "http://localhost:8080/computer/listComputer"
  constructor(private httpClient: HttpClient) { }
  getAllComputer():Observable<any>{
    return this.httpClient.get<any>(this.URL_LIST);
  }
}
