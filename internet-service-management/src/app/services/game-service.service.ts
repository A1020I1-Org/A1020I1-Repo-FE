import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGame} from "../game/IGame";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http:HttpClient) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer` + this.tokenStorage.getToken(),
    //     'Access-Control-Allow-Origin': 'http://localhost:4200',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    //   }),
    // };
  }
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
