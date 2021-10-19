import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../interface/IEmployee";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../interface/FileUpload";
import {finalize} from "rxjs/operators";

// const API_CREATE = 'http://localhost:8080/employee/createEmployee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_CREATE: string = 'http://localhost:8080/employee/createEmployee';
  public API_EDIT = 'http://localhost:8080/employee/updateEmployee';
  private API_DETAIL = 'http://localhost:8080/employee/viewEmployee';
  private basePath = '/imgEmployee';
  httpOptions: any;
  constructor(public httpClient: HttpClient, private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }



  pushFileToStorage(fileUpload: FileUpload): Observable<string> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
          return downloadURL;
        });
      })
    ).subscribe();
    return this.storage.ref(this.basePath+"/"+fileUpload.file.name).getDownloadURL();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  createEmployee(employee: IEmployee): Observable<HttpEvent<any>> {
    return this.httpClient.post<IEmployee>(this.API_CREATE, employee, this.httpOptions);
  }

    getEmployeeById(employeeId: string | null): Observable<HttpEvent<any>> {
    return this.httpClient.get<any>(this.API_DETAIL + '/' + employeeId);
  }

  editEmployee(employeeId: string,employee: IEmployee): Observable<HttpEvent<any>> {
    return this.httpClient.put<any>(this.API_EDIT + '/' + employeeId, employee);
  }

}
