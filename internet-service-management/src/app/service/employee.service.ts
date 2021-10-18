import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../interface/IEmployee";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {FileUpload} from "../interface/FileUpload";
import {finalize} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly  API_CREATE = 'http://localhost:8080/employee/createEmployee';
  readonly API_EDIT = 'http://localhost:8080/employee/updateEmployee';
  readonly API_DETAIL = 'http://localhost:8080/employee/viewEmployee';
  private basePath = '/imgEmployee';

  constructor(public httpClient: HttpClient,private db: AngularFireDatabase, private storage: AngularFireStorage) {
    };

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
        });
      })
    ).subscribe();
    return storageRef.getDownloadURL();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  createEmployee(employee: IEmployee): Observable<any> {
    return this.httpClient.post<any>(this.API_CREATE, employee);
  }

  getEmployeeById(employeeId: string | null): Observable<HttpEvent<any>> {
    return this.httpClient.get<any>(this.API_DETAIL + '/' + employeeId);
  }

  editEmployee(employeeId: string,employee: IEmployee): Observable<HttpEvent<any>> {
    return this.httpClient.put<any>(this.API_EDIT + '/' + employeeId, employee);
  }

}
