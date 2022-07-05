import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {
  firstNameSortType: any = 'asc'
  lastNameSortType: any = 'asc'
  statusSortType: any = 'asc'
  sortColumnClick: any;
  dateConfig : any;
  dateRange : any;
  filterClick: boolean = false;
  status: any = '';
  mode: any = 'view';


  constructor(
    private dashboardService : DashboardService,
  ) { }

  ngOnInit(): void {
  }

  sorting(columnName:any){
    this.sortColumnClick = columnName;
    if(columnName=="firstName"){
      this.firstNameSortType = this.firstNameSortType == 'asc' ? 'desc' : 'asc';
    }
    if(columnName=="lastName"){
      this.lastNameSortType = this.lastNameSortType == 'asc' ? 'desc' : 'asc';
    }
    if(columnName=="status"){
      this.statusSortType = this.statusSortType == 'asc' ? 'desc' : 'asc';
    }
  }

  reset(){
    this.status = '';
    this.dateRange = '';
  }

  expand(){
    var element = document.getElementById("userGroup");
    if(element?.classList.contains('show-overview'))
    {
      element?.classList.remove("show-overview");
    }
  }

  minimise(){
    var element = document.getElementById("userGroup");
    element?.classList.add("show-overview");
    //left main menu collapse
    localStorage.setItem("bigMenu", 'false');
    var element1 = document.getElementById("main");
    element1?.classList.add("small-menu");
    this.dashboardService.setNavCollapseStatus(false);
  }


  viewClick(){
    this.mode = 'view';
    this.minimise();
  }

  editClick(){
    this.mode = 'edit';
    this.minimise();
  }

}
