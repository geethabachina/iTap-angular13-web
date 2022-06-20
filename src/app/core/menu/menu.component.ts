import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // config: any;
  // options: any = { multi: false };
  // refreshStatus: Subscription;

  menus: any = [
    // { name: "Home",iconClass: "fa fa-home",active: true,
    //   submenu: [
    //     { name: "Change Password", url: "#" },
    //   ]
    // },
    { name: "Administration", iconClass: "fa fa-wrench",active: false,
      submenu: [
        { name: "User Administration",submenu: [
          { name: "User Groups",iconClass: "fa fa-users", url: "core/admin/userGroup" },
          { name: "User Roles",iconClass: "fa fa-cogs", url: "#" },
          { name: "Users",iconClass: "fa fa-user", url: "#" },
          { name: "User Matrix Report",iconClass: "fa fa-id-card-o", url: "#" }
         ]
        },
        { name: "Planning",submenu: [
          { name: "Ship", iconClass: "fa fa-clock-o", url: "core/planning/shipParticular" },
          { name: "Designation", iconClass: "fa fa-suitcase", url: "#" },
          { name: "Type of Leave", iconClass: "fa fa-server", url: "#" },
         ]
        },
        { name: "Berth Plan", url: "#",submenu: [
          { name: "Terminal", iconClass: "fa fa-clock-o", url: "#" },
          { name: "Wharf", iconClass: "fa fa-suitcase", url: "#" },
          { name: "Yard", iconClass: "fa fa-server", url: "#" },
          { name: "Tide", iconClass: "fa fa-cogs", url: "#" },
          { name: "ship Agent Contact", iconClass: "fa fa-pencil", url: "#" },
          { name: "ship Stack height list", iconClass: "fa fa-list", url: "#" },
         ]
       }
      ]
    },
    { name: "Planning",iconClass: "fa fa-calendar",active: false,
      submenu: [
        { name: "Ship Perticulars", url: "#" }
      ]
    },
    { name: "Berth Planning",iconClass: "fa fa-calendar",active: false,
      submenu: [
        { name: "One Day", url: "#" },
        { name: "Two Days", url: "#" },
        { name: "Three Days", url: "#" },
        { name: "Seven Days", url: "#" }
      ]
    },
    { name: "Merine Control",iconClass: "fa fa-wrench",active: false,
      submenu: [
        { name: "Ship Movement", url: "#" }
      ]
    },
    { name: "Documentation",iconClass: "fa fa-file-text",active: false,submenu: []},
    { name: "Warehouse",iconClass: "fa fa-home",active: false,submenu: []},
    { name: "Billing",iconClass: "fa fa-file-text",active: false,submenu: []},
    { name: "LBT",iconClass: "fa fa-snowflake-o",active: false,submenu: []},
    { name: "STEVEDORE",iconClass: "fa fa-window-restore",active: false,submenu: []},
    { name: "Operations",iconClass: "fa fa-gavel",active: false,submenu: []},
    { name: "Finance",iconClass: "fa fa-money",active: false,submenu: []},
    { name: "Gate",iconClass: "fa fa-building-o",active: false,submenu: []},
    { name: "Reports",iconClass: "fa fa-file-text-o",active: false,submenu: []},
    { name: "themes",iconClass: "fa fa-heart",active: false,submenu: []},
    // { name: "Logout",iconClass: "fa fa-user",active: false,submenu: []}
  ];

  constructor(
    private dashboardService : DashboardService,
  ) {
    // this.refreshStatus = this.dashboardService.refreshCollapse$.subscribe((item:any) => {
    //   alert(localStorage.getItem("collapse-nav"));
    // });
   }

  ngOnInit() {
    //this.config = this.mergeConfig(this.options);
  }

  // mergeConfig(options: any) {
  //   const config = {
  //     multi: true
  //   };
  //   return { ...config, ...options };
  // }

  // toggle(index: number) {
  //  if (!this.config.multi) {
  //    this.menus.filter((menu:any, i:any) => i !== index && menu.active
  //    ).forEach((menu:any) => menu.active = !menu.active);
  //   }
  //   this.menus[index].active = !this.menus[index].active;
  // }


  ngOnDestroy(){
    // this.refreshStatus.unsubscribe();
  }

  mouseOverFun(){
    var element = document.getElementById("main");
    if(element?.classList.contains('small-menu'))
    {
      element?.classList.remove("small-menu");
    }
  }

  mouseLeave(){
    var element = document.getElementById("main");
    if(localStorage.getItem("bigMenu")=='true'){
      element?.classList.remove("small-menu");
    }
    else{
      element?.classList.add("small-menu");
    }
  }







}
