import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { IidBillingComponent } from './iid-billing/iid-billing.component';
import { ServiceVoucherBillComponent } from './service-voucher-bill/service-voucher-bill.component';

@NgModule({
  declarations: [
    IidBillingComponent,
    ServiceVoucherBillComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BillingModule { }
