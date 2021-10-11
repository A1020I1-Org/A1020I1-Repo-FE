import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public API: string = '';

  constructor(private http: HttpClient) {
  }

  getAllStatus() {
    return this.http.get(this.API);
  }
}
