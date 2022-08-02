import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  menus: any;
  menusAll: any = [
    { name: "Administration", iconClass: "fa fa-wrench",active: false,
      submenu: [
        { name: "User Administration",active: false,submenu: [
          { name: "User Groups",iconClass: "fa fa-users" },
          { name: "User Roles",iconClass: "fa fa-cogs", url: "#" },
          { name: "Users",iconClass: "fa fa-user",url: "core/admin/userGroup" },
          { name: "User Matrix Report",iconClass: "fa fa-id-card-o", url: "#" }
         ]
        },
        { name: "Planning",active: false,submenu: [
          { name: "Ship", iconClass: "fa fa-clock-o", url: "core/planning/shipParticular" },
          { name: "Designation", iconClass: "fa fa-suitcase", url: "#" },
          { name: "Type of Leave", iconClass: "fa fa-server", url: "#" },
         ]
        },
        { name: "Berth Plan",active: false, url: "#",submenu: [
          { name: "Terminal", iconClass: "fa fa-clock-o", url: "#" },
          { name: "Wharf", iconClass: "fa fa-suitcase", url: "#" },
          { name: "Yard", iconClass: "fa fa-server", url: "#" },
          { name: "Tide", iconClass: "fa fa-cogs", url: "#" },
          { name: "ship Agent Contact", iconClass: "fa fa-pencil", url: "#" },
          { name: "ship Stack height list", iconClass: "fa fa-list", url: "#" },
         ]
       },
       { name: "Marine", url: "#",active: false,submenu: []},
       { name: "Maintenance", url: "#",active: false,submenu: []},
       { name: "Warehouse", url: "#",active: false,submenu: []},
       { name: "Cargo", url: "#",active: false,submenu: []},
       { name: "Service", url: "#",active: false,submenu: []},
       { name: "Voucher", url: "#",active: false,submenu: []},
       { name: "Area Duty Designation", url: "#",active: false,submenu: []},
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
    { name: "Planning",iconClass: "fa fa-calendar",active: false,
      submenu: [
        { name: "Ship Perticulars", url: "#" },
        { name: "Ship Visit", url: "#" },
        { name: "Ship Shifting", url: "#" },
        { name: "Staff Leave", url: "#" },
        { name: "Roster Plan", url: "#" },
        { name: "Roster Booking", url: "#" },
        { name: "SOS Handover Booking", url: "#" },
        { name: "Vessel Operation Plan", url: "#" },
        { name: "Vessel Productivity Plan", url: "#" },
        { name: "Memo", url: "#" },
        { name: "Gang Booking", url: "#" },
        { name: "Pilot Booking", url: "#" },
        { name: "Pilot Leave", url: "#" },
        { name: "Pilot Roster Plan", url: "#" },
        { name: "Approved Booking", url: "#" }
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
    { name: "Marine Control",iconClass: "fa fa-wrench",active: false,
      submenu: [
        { name: "Ship Movement", url: "#" }
      ]
    },
    { name: "Documentation",iconClass: "fa fa-file-text",active: false,submenu: []},
    { name: "Warehouse",iconClass: "fa fa-home",active: false,submenu: []},
    { name: "Billing",iconClass: "fa fa-file-text",active: false,
      submenu: [
        { name: "Deposite",active: false, url: "#"},
        { name: "Contractor Payment",active: false, url: "#"},
        { name: "IID/IED Billing",active: false,url: "core/billing/iidBilling"},
        { name: "Billing Checklist",active: false, url: "#"},
        { name: "General Billing",active: false, url: "#"},
        { name: "Service Voucher Billing",active: false, url: "core/billing/serviceVoucherBill"},
        { name: "Port Police Service Voucher Billing",active: false, url: "#"},
        { name: "Split Account",active: false, url: "#",submenu: [{ name: "Request",iconClass: "fa fa-clock-o", url: "#" },{ name: "Approval",iconClass: "fa fa-clock-o", url: "#" }]},
        { name: "LCB Penalty Billing",active: false, url: "#"},
      ]
    },
    { name: "LBT",iconClass: "fa fa-snowflake-o",active: false,submenu: []},
    { name: "STEVEDORE",iconClass: "fa fa-window-restore",active: false,submenu: []},
    { name: "Operations",iconClass: "fa fa-gavel",active: false,submenu: []},
    { name: "Finance",iconClass: "fa fa-money",active: false,submenu: []},
    { name: "Gate",iconClass: "fa fa-building-o",active: false,submenu: []},
    { name: "Reports",iconClass: "fa fa-file-text-o",active: false,submenu: []},
    { name: "Themes",iconClass: "fa fa-heart",active: false,submenu: []},
  ];

  constructor(
    private dashboardService : DashboardService,
    private router: Router
  ) {
    this.refreshStatus = this.dashboardService.refreshCollapse$.subscribe((item:any) => {
      this.bigMenu = item;
      this.collapseAll();
    });
   }

  ngOnInit() {
    //this.config = this.mergeConfig(this.options);
    debugger
    this.menus = [];
    for(var i=0;i<=this.menusAll.length-1;i++){
      if(this.router.url.includes("core/admin") && this.menusAll[i].name=="Administration" ){
        this.menus.push(this.menusAll[i]);
        if(this.router.url.includes("core/admin/userGroup")){
          this.menusAll[i].submenu[0].active = true; //to expand sub submenu
        }
      }
      else if(this.router.url.includes("core/billing") && this.menusAll[i].name=="Billing" ){
        this.menus.push(this.menusAll[i]);
        if(this.router.url.includes("core/billing/iidBilling")){
          this.menusAll[i].submenu[2].active = true; //to apply hover class
        }
        else if(this.router.url.includes("core/billing/serviceVoucherBill")){
          this.menusAll[i].submenu[5].active = true; //to apply hover class
        }
      }
    }
  }

  subMenuClick(subIndex:any){
    debugger
    for(var i=0;i<=this.menus[0].submenu.length-1;i++){
      if(i==subIndex){
        this.menus[0].submenu[i].active = true; //to apply hover class
      }
      else{
        this.menus[0].submenu[i].active = false; //to apply hover class
      }
    }
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
