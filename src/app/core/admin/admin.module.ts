import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserGroupComponent } from './user-group/user-group.component';
import { AddUserGroupComponent } from './user-group/add-user-group/add-user-group.component';
import { DeleteUserGroupComponent } from './user-group/delete-user-group/delete-user-group.component';

@NgModule({
  declarations: [
    UserGroupComponent,
    AddUserGroupComponent,
    DeleteUserGroupComponent
  ],
  imports: [
    SharedModule,
  ],
})
export class AdminModule { }
