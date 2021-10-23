import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComputer} from "../interface/IComputer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computer!: IComputer[];
  readonly URL_LIST = "http://localhost:8080/computer";
  readonly URL_DELETE = "http://localhost:8080/computer/delete";
  readonly URL_GET = "http://localhost:8080/computer/getInfor";
  readonly URL_SEARCH = "http://localhost:8080/computer/search";
  constructor(private httpClient: HttpClient) { }

  getAllComputer():Observable<any>{
    return this.httpClient.get<any>(this.URL_LIST+ '/list');
  }
  getPageList(pageNum: number): Observable<any>{

    return this.httpClient.get<any>(this.URL_LIST + '/list?page=' +pageNum);
  }
  getPageSearch(pageNumber: number,idComputer: string,locationComputer: string,startUsedDateFromComputer: string,
                startUsedDateToComputer: string, typeComputer: string,statusComputer: string):Observable<any>{
   const url = this.URL_SEARCH + '?page=' + pageNumber + '&computerId=' + idComputer + '&computerLocation='+locationComputer
     +'&startUsedDateFromComputer='+startUsedDateFromComputer + '&startUsedDateToComputer='+startUsedDateToComputer + '&type='+typeComputer
     +'&status='+statusComputer;
   return this.httpClient.get<any>(url)
  }
  deleteComputer(id:string):Observable<IComputer>{
    return this.httpClient.delete<IComputer>(this.URL_DELETE + '/' + id);
  }
  getComputerById(id:string):Observable<IComputer>{
    return this.httpClient.get<IComputer>(this.URL_GET+ '/' + id);
  }
  searchComputer(idComputer: string,locationComputer: string,startUsedDateFromComputer: string,
                 startUsedDateToComputer: string, typeComputer: string,statusComputer: string):Observable<IComputer>{
  return this.httpClient.get<IComputer>(this.URL_SEARCH + '?computerId=' + idComputer + '&computerLocation='+locationComputer
  +'&startUsedDateFromComputer='+startUsedDateFromComputer + '&startUsedDateToComputer='+startUsedDateToComputer + '&type='+typeComputer
  +'&status='+statusComputer);
  }
}
