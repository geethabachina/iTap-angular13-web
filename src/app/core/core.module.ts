import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { PlanningModule } from './planning/planning.module';
import { AdminModule } from './admin/admin.module';
import { BillingModule } from './billing/billing.module';

import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PlanningComponent } from './planning/planning.component';
import { CardsMenuComponent } from './cards-menu/cards-menu.component';
import { BillingComponent } from './billing/billing.component';


@NgModule({
  imports: [
    SharedModule,
    // BrowserModule,
    //CommonModule,
    //RouterModule,
    //FormsModule,
    //ReactiveFormsModule,
    PlanningModule,
    AdminModule,
    BillingModule
  ],
  declarations: [
    LoginComponent,
    MenuComponent,
    CoreComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    PlanningComponent,
    CardsMenuComponent,
    BillingComponent
  ]
})
export class CoreModule { }
