import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Payment } from 'src/app/interface/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentPayComponent } from '../payment-pay/payment-pay.component';
import { ServiceDetailComponent } from '../service-detail/service-detail.component';

@Component({
  selector: 'app-payment-customer',
  templateUrl: './payment-customer.component.html',
  styleUrls: ['./payment-customer.component.css']
})
export class PaymentCustomerComponent implements OnInit {
  public payment!: Payment;
  constructor(
    public paymentService: PaymentService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.paymentService.getPaymentCustomerById(1).subscribe(data => {
      this.payment = data;
    })
  }

  openDialogDetail(payId: any): void {
    this.paymentService.getPaymentById(payId).subscribe(dataPay => {
      const dialogRef = this.dialog.open(ServiceDetailComponent, {
        width: '800px',
        data: { data: dataPay },
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })
  }

  openDialogPayment(payId: any): void {
    this.paymentService.getPaymentById(payId).subscribe(dataPay => {
      const dialogRef = this.dialog.open(PaymentPayComponent, {
        width: '600px',
        data: { data: dataPay },
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    })
  }

}

