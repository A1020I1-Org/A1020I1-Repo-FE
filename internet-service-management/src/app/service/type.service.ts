import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  public API: string = '';

  constructor(private http: HttpClient) {
  }

  getAllType() {
    return this.http.get(this.API);
  }
}
