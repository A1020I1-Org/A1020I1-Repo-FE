import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCustomerComponent } from './payment/payment-customer/payment-customer.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';

const routes: Routes = [
  { path: 'list-payment', component: PaymentListComponent },
  { path: 'payment-customer', component: PaymentCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
