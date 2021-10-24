import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGame} from "../game/IGame";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http:HttpClient) { }
  URL = "http://localhost:8080/games/";

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  finById(id:number):Observable<IGame>{
    return this.http.get<IGame>(this.URL+'/'+id);
  }

  delete(id:number):Observable<IGame>{
    return this.http.delete<IGame>(this.URL+'/'+id);
  }

  search(key:String):Observable<any>{
    return this.http.get<any>(this.URL+"/search?key="+key);
  }

  searchCategory(key:String):Observable<any>{
    return this.http.get<any>(this.URL+"/searchCategory?key="+key);
  }

  getPage(key:number):Observable<any>{
    const url = `${this.URL}?page=${key}`;
    return this.http.get<any>(url);
  }

  getCategory():Observable<any>{
    return this.http.get<any>(this.URL+"/category")
  }
}
