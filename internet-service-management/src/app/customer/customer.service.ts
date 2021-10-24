
import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:8080/customer';
  httpOptions: any;
  constructor(private httpClient: HttpClient,private toast: ToastrService) {
    // this.httpOptions={'Access-Control-Allow-Origin': 'http://localhost:4200',
    // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // }
  }

  getAllCustomer(page: number): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + '/list' + '?page='+ page,this.httpOptions);
  }


  deleteCustomer(id: number | undefined): Observable<any> {
    return this.httpClient.delete<any>(this.API_URL +'/delete/'+id,this.httpOptions);
  }

  searchCustomer(page: number, user_name: string,status: number, address: string, dateBirthFrom: string, dateBirthTo: string): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + '/search' + '?page=' + page + '&username=' + user_name+ '&status=' + status + '&address=' + address
      + '&dateBirthFrom=' + dateBirthFrom + '&dateBirthTo=' + dateBirthTo ,this.httpOptions);
  }

  // getAllStatus(): Observable<HttpEvent<any>> {
  //   return this.httpClient.get<any>(this.API_URL + '/customerStatus',this.httpOptions);
  // }
}
