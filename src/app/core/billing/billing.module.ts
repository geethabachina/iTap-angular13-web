import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { IidBillingComponent } from './iid-billing/iid-billing.component';

@NgModule({
  declarations: [
    IidBillingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BillingModule { }
