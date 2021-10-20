import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public APIPaymentCustomer: string = 'http://localhost:8080/payment/payCustomer';
  public APIGetPay: string = 'http://localhost:8080/payment/pay';
  public APIExchange: string = 'http://localhost:8080/payment/pay/exchange';
  public APIPay: string = 'http://localhost:8080/payment/pay';
  public APIPaypal: string = 'http://localhost:8080/payment/make/paypal';
  public APIList: string = 'http://localhost:8080/payment/list'
  public APISearch: string = 'http://localhost:8080/payment/search'

  constructor(
    public http: HttpClient
  ) { }

  getPaymentCustomerById(customerId: any): Observable<any> {
    return this.http.get(this.APIPaymentCustomer + '/' + customerId);
  }

  getPaymentById(customerId: any): Observable<any> {
    return this.http.get(this.APIGetPay + '/' + customerId);
  }

  calculatorExchange(idPay: number, moneyRecived: number): Observable<any> {
    return this.http.post(this.APIExchange + '?id=' + idPay + '&moneyRecived=' + moneyRecived, {})
  }

  pay(idPay: number): Observable<any> {
    return this.http.post(this.APIPay + '?id=' + idPay, {})
  }

  paypal(idPay: number): Observable<any> {
    return this.http.post(this.APIPaypal + '?id=' + idPay, {})
  }

  getListPayment(): Observable<any> {
    return this.http.get(this.APIList);
  }

  search(searchName: string): Observable<any> {
    return this.http.get(this.APISearch + '?searchName=' + searchName)
  }

  getPageList(pageNum: number): Observable<any> {
    const url = `${this.APIList}?page=${pageNum}`;
    return this.http.get<any>(url);
  }
}
