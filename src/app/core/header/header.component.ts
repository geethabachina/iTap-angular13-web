import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  photoUrl: string = '../../../../assets/css/images/user-default-white.png';
  bigMenu: boolean = true;
  refreshStatus: Subscription;

  constructor(
    private dashboardService : DashboardService,
  ) {
    this.refreshStatus = this.dashboardService.refreshCollapse$.subscribe((item:any) => {
      this.bigMenu = item;
    });
   }

  ngOnInit(): void {
    localStorage.setItem("bigMenu", 'true');
  }


  toggleSideBar(){
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
    this.dashboardService.setNavCollapseStatus(this.bigMenu);
  }

  ngOnDestroy(){
    this.refreshStatus.unsubscribe();
  }














}
