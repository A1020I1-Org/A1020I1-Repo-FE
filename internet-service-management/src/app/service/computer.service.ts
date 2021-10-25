import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {IComputer} from "../interface/IComputer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  public API: string = 'http://localhost:8080/computer';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<IComputer> {
    return this.http.get<IComputer>(this.API + "/edit/" + id);
  }

  create(computer: IComputer): Observable<IComputer> {
    return this.http.post<any>(this.API + '/create', computer);
  }

  update(id: any, computer: IComputer): Observable<IComputer> {
    return this.http.put<IComputer>(this.API + "/update/" + id, computer);
  }

}
