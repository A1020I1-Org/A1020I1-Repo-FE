import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';



@NgModule({
    declarations: [
        CustomerRegisterComponent
    ],
    exports: [
        CustomerRegisterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CustomerModule { }
