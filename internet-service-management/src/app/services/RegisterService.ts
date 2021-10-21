import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerRegister} from "../model/CustomerRegister";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private readonly API_URL = "http://localhost:8080/customer";

  constructor(private _httpClient: HttpClient) {
  }

  checkUser(userName: string): Observable<boolean> {
    return this._httpClient.get<boolean>(this.API_URL + "/checkUser/" + userName);
  }

  register(customerRegister: CustomerRegister): Observable<void> {
    const url = `${this.API_URL}/register`
    return this._httpClient.post<void>(url, customerRegister);
  }

  checkEmail(email: string): Observable<boolean> {
    return this._httpClient.get<boolean>(this.API_URL + "/checkEmail/" + email);
  }
}
