import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  config: any;
  options: any = { multi: false };


  menus: any = [
    {
      name: "Front-end",
      iconClass: "fa fa-code",
      active: true,
      submenu: [
        { name: "HTML", url: "#" },
        { name: "CSS", url: "#" },
        { name: "Javascript", url: "#" }
      ]
    },
    {
      name: "Responsive web",
      iconClass: "fa fa-mobile",
      active: false,
      submenu: [
        { name: "Tablets", url: "#" },
        { name: "Mobiles", url: "#" },
        { name: "Desktop", url: "#" }
      ]
    },
    {
      name: "Web Browser",
      iconClass: "fa fa-globe",
      active: false,
      submenu: [
        { name: "Chrome", url: "#" },
        { name: "Firefox", url: "#" },
        { name: "Desktop", url: "#" }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: any) {
    const config = {
      multi: true
    };
    return { ...config, ...options };
  }

  toggle(index: number) {
   if (!this.config.multi) {
     this.menus.filter((menu:any, i:any) => i !== index && menu.active
     ).forEach((menu:any) => menu.active = !menu.active);
    }
    this.menus[index].active = !this.menus[index].active;
  }







}
