import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  photoUrl: string = '../../../../assets/css/images/user-default-white.png';

  constructor(
    private dashboardService : DashboardService,
  ) { }

  ngOnInit(): void {
  }


   toggleSideBar(){
    this.dashboardService.setNavCollapseStatus(true);
    // document.querySelector('body').classList.toggle('collapsed-added');
    // document.querySelector('body').classList.toggle('collapsed-removed');

    // if(document.querySelector('.main').classList.contains('collapsed'))
    // {

    // }
    // else {

    // }
   }














}
