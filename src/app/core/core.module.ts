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

// import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // CoreRoutingModule
  ],
  declarations: [
    LoginComponent,
    MenuComponent,
    CoreComponent,
    HeaderComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
