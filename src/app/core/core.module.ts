import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';

// import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // CoreRoutingModule
  ],
  declarations: [
    LoginComponent,
    CoreComponent
  ]
})
export class CoreModule { }
