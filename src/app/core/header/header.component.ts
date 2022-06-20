import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  photoUrl: string = '../../../../assets/css/images/user-default-white.png';
  bigMenu: boolean = true;
  constructor(
    private dashboardService : DashboardService,
  ) { }

  ngOnInit(): void {
    localStorage.setItem("bigMenu", 'true');
  }


  toggleSideBar(){
    //this.dashboardService.setNavCollapseStatus(true);
    var element = document.getElementById("main");
    if(element?.classList.contains('small-menu'))
    {
      element?.classList.remove("small-menu");
      localStorage.setItem("bigMenu", 'true');
      this.bigMenu = true;
    }
    else {
      element?.classList.add("small-menu");
      localStorage.setItem("bigMenu", 'false');
      this.bigMenu = false;
    }
  }















}
