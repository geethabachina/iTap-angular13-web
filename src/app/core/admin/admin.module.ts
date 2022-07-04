import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { UserGroupComponent } from './user-group/user-group.component';
import { AddUserGroupComponent } from './user-group/add-user-group/add-user-group.component';

@NgModule({
  declarations: [
    UserGroupComponent,
    AddUserGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    SharedModule
  ]
})
export class AdminModule { }
