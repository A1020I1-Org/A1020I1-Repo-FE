import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API: string = "http://localhost:8080/employee";

  constructor(private http: HttpClient) { }

  getAllEmployee(page : number): Observable<any>{
    return this.http.get<any>(this.API + '/listEmployee?page=' + page);
  }
  getAllAddress(): Observable<any>{
    return this.http.get<any>(this.API + '/listAddress');
  }
  searchEmployee(idEmp: string, dateStart: string, dateEnd: string, workStart: string, workEnd: string,
                 address: string, positionId: string): Observable<any> {
    return this.http.get<any>(this.API + '/searchEmployee?idEmp=' + idEmp + '&dateStart=' +
      dateStart + '&dateEnd=' + dateEnd + '&workStart=' + workStart + '&workEnd=' + workEnd +
      '&address=' + address + '&positionId=' + positionId);
  }
  deleteEmployee(id: string): Observable<any>{
    return this.http.delete<any>(this.API + '/deleteEmployee/' + id);
  }
  getEmployeeById(employeeId: string | null): Observable<any> {
    return this.http.get<any>(this.API + '/viewEmployee/' + employeeId);
  }
}
