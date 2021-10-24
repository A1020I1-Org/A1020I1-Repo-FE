import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// @ts-ignore
import {IComputer} from "../interface/IComputer";

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  public API: string = '';

  constructor(private http: HttpClient) {
  }

  getAllComputer(): Observable<any> {
    return this.http.get(this.API + "?sort=computerId&_oder=asc");
  }

  findById(id: number): Observable<IComputer> {
    return this.http.get<IComputer>(this.API + "/" + id);
  }

  create(computer: IComputer): Observable<any> {
    return this.http.post<any>(this.API, computer);
  }

  update(id: any, computer: IComputer): Observable<IComputer> {
    return this.http.put<IComputer>(this.API + "/" + id, computer);
  }

}
