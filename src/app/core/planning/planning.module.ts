import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShipParticularComponent } from './ship-particular/ship-particular.component';



@NgModule({
  declarations: [

    ShipParticularComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlanningModule { }
