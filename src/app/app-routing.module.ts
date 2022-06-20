// import {Routes, RouterModule} from '@angular/router';
// import {ModuleWithProviders} from '@angular/core';

// const routes: Routes = [
// ];

// // export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

// export const AppRoutingModule: any[] = [];
// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


// // export const AppRoutingModule: ModuleWithProviders<unknown> = RouterModule.forRoot(
// //     routes
// //   );



import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { MenuComponent } from './core/menu/menu.component';
// import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AdminComponent } from './core/admin/admin.component';
import { UserGroupComponent } from './core/admin/user-group/user-group.component';
import { ShipParticularComponent } from './core/planning/ship-particular/ship-particular.component';
import { PlanningComponent } from './core/planning/planning.component';
import { CoreComponent } from './core/core.component';


const adminRoutes: Routes = [
  {
    path: 'userGroup',
    component: UserGroupComponent,
  }
];
const planningRoutes: Routes = [
  {
    path: 'shipParticular',
    component: ShipParticularComponent,
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    // path: 'dashboard',
    // component: DashboardComponent,
    path: 'core',
    component: CoreComponent,
    children: [
      // {
      //   path: '',
      //   // redirectTo: 'dashboard',
      //   pathMatch: 'full',
      //   component: DashboardComponent,
      // },
      {
        path:'admin',
        component: AdminComponent,
        children: adminRoutes,
      },
      {
        path:'planning',
        component: PlanningComponent,
        children: planningRoutes,
      },
    ]
  }
];

@NgModule({
//   imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

