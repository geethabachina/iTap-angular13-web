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
  refreshStatus: Subscription;
  bigMenu: any = true;
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
       },
       { name: "Marine", url: "#",submenu: []},
       { name: "Maintenance", url: "#",submenu: []},
       { name: "Warehouse", url: "#",submenu: []},
       { name: "Cargo", url: "#",submenu: []},
       { name: "Service", url: "#",submenu: []},
       { name: "Voucher", url: "#",submenu: []},
       { name: "Area Duty Designation", url: "#",submenu: []},
       { name: "Incentive Settings", url: "#"},
       { name: "Email Settings", url: "#"},
       { name: "Public Holidays", url: "#"},
       { name: "Tax Code", url: "#"},
       { name: "Tariff Master", url: "#"},
       { name: "Billing Rules", url: "#"},
       { name: "Rebate Master", url: "#"},
       { name: "Operation Services", url: "#"},
       { name: "Country", url: "#"},
       { name: "Port", url: "#"},
       { name: "Customer", url: "#"},
       { name: "Customer Agreement", url: "#"},
       { name: "Package Type", url: "#"},
       { name: "LPK Cargo Code", url: "#"},
       { name: "Delay Reason", url: "#"},
      ]
    },
    // { name: "Planning",iconClass: "fa fa-calendar",active: false,
    //   submenu: [
    //     { name: "Ship Perticulars", url: "#" },
    //     { name: "Ship Visit", url: "#" },
    //     { name: "Ship Shifting", url: "#" },
    //     { name: "Staff Leave", url: "#" },
    //     { name: "Roster Plan", url: "#" },
    //     { name: "Roster Booking", url: "#" },
    //     { name: "SOS Handover Booking", url: "#" },
    //     { name: "Vessel Operation Plan", url: "#" },
    //     { name: "Vessel Productivity Plan", url: "#" },
    //     { name: "Memo", url: "#" },
    //     { name: "Gang Booking", url: "#" },
    //     { name: "Pilot Booking", url: "#" },
    //     { name: "Pilot Leave", url: "#" },
    //     { name: "Pilot Roster Plan", url: "#" },
    //     { name: "Approved Booking", url: "#" }
    //   ]
    // },
    // { name: "Berth Planning",iconClass: "fa fa-calendar",active: false,
    //   submenu: [
    //     { name: "One Day", url: "#" },
    //     { name: "Two Days", url: "#" },
    //     { name: "Three Days", url: "#" },
    //     { name: "Seven Days", url: "#" }
    //   ]
    // },
    // { name: "Marine Control",iconClass: "fa fa-wrench",active: false,
    //   submenu: [
    //     { name: "Ship Movement", url: "#" }
    //   ]
    // },
    // { name: "Documentation",iconClass: "fa fa-file-text",active: false,submenu: []},
    // { name: "Warehouse",iconClass: "fa fa-home",active: false,submenu: []},
    // { name: "Billing",iconClass: "fa fa-file-text",active: false,submenu: []},
    // { name: "LBT",iconClass: "fa fa-snowflake-o",active: false,submenu: []},
    // { name: "STEVEDORE",iconClass: "fa fa-window-restore",active: false,submenu: []},
    // { name: "Operations",iconClass: "fa fa-gavel",active: false,submenu: []},
    // { name: "Finance",iconClass: "fa fa-money",active: false,submenu: []},
    // { name: "Gate",iconClass: "fa fa-building-o",active: false,submenu: []},
    // { name: "Reports",iconClass: "fa fa-file-text-o",active: false,submenu: []},
    // { name: "Themes",iconClass: "fa fa-heart",active: false,submenu: []},
  ];

  constructor(
    private dashboardService : DashboardService,
  ) {
    this.refreshStatus = this.dashboardService.refreshCollapse$.subscribe((item:any) => {
      this.bigMenu = item;
      this.collapseAll();
    });
   }

  ngOnInit() {
    //this.config = this.mergeConfig(this.options);
  }

  collapseAll(){
    for(var i=0;i<=this.menus.length-1;i++){
      var element = document.getElementById('menu'+ i);
      var ele = document.getElementById('menuIcon'+ i);
      element?.classList.remove("show");
      ele?.classList.add("collapsed");//for collapse icon change
      for(var j=0;j<=this.menus[i].submenu.length-1;j++){
        var element1 = document.getElementById('submenu' + i + j);
        var ele1 = document.getElementById('submenuIcon' + i + j);
        element1?.classList.remove("show");
        ele1?.classList.add("collapsed");//for collapse icon change
      }
    }
  }

  collapseMenu(index:any){
    debugger
    //setTimeout(() => {
      for(var i=0;i<=this.menus.length-1;i++){
        var element = document.getElementById('menu'+ i);
        var ele = document.getElementById('menuIcon'+ i);
        if(i==index){
        }
        else{
          element?.classList.remove("show");
          ele?.classList.add("collapsed");
          for(var j=0;j<=this.menus[i].submenu.length-1;j++){
            var element1 = document.getElementById('submenu' + i + j);
            var ele1 = document.getElementById('submenuIcon' + i + j);
            element1?.classList.remove("show");
            ele1?.classList.add("collapsed");//for collapse icon change
          }
        }
      }
    //}, 200);
  }

  collapseSubMenu(index:any,sibIndex:any){
    for(var i=0;i<=this.menus.length-1;i++){
      for(var j=0;j<=this.menus[i].submenu.length-1;j++){
        if(i==index){
          var element = document.getElementById('submenu' + i + j);
          var ele = document.getElementById('submenuIcon' + i + j);
          if(j==sibIndex){
          }
          else{
            element?.classList.remove("show");
            ele?.classList.add("collapsed");
          }
        }
      }
    }
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


  mouseOverFun(){
    var element = document.getElementById("main");
    if(element?.classList.contains('small-menu'))
    {
      element?.classList.remove("small-menu");
      this.bigMenu = true;
    }
  }

  mouseLeave(){
    var element = document.getElementById("main");
    if(localStorage.getItem("bigMenu")=='true'){
      element?.classList.remove("small-menu");
      this.bigMenu = true;
    }
    else{
      element?.classList.add("small-menu");
      this.bigMenu = false;
      this.collapseAll();
    }
  }


  ngOnDestroy(){
    this.refreshStatus.unsubscribe();
  }



}
