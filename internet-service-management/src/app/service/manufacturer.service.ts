import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  public API: string = '';

  constructor(private http: HttpClient) {
  }

  getAllManufacturer() {
    return this.http.get(this.API);
  }
}
