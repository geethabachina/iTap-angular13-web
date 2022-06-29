import { Component, OnInit } from '@angular/core';

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


  constructor() { }

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

}
