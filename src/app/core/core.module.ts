import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PlanningModule } from './planning/planning.module';
import { AdminModule } from './admin/admin.module';

import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PlanningComponent } from './planning/planning.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PlanningModule,
    AdminModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    MenuComponent,
    CoreComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    PlanningComponent
  ]
})
export class CoreModule { }
