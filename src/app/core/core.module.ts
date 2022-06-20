import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { UserGroupComponent } from './admin/user-group/user-group.component';
import { PlanningComponent } from './planning/planning.component';
import { ShipParticularComponent } from './planning/ship-particular/ship-particular.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    MenuComponent,
    CoreComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    UserGroupComponent,
    PlanningComponent,
    ShipParticularComponent
  ]
})
export class CoreModule { }
