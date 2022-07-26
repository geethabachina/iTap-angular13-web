import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
  // mode: any ;
  rightExpandIcon: boolean = true;
  leftExpandIcon: boolean = false;
  tableData: any = [
  {firstName:'Smith',lastName:'Mathias',status:'Berthed Vessels',vesselSize:'1000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Arrived At Anchorage',vesselSize:'2000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Smith',lastName:'Mathias',status:'Vessel Arriving Within 24 Hours',vesselSize:'3000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Smith',lastName:'Mathias',status:'Vessel Arriving After 24 Hours',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Smith',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Open',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
  {firstName:'Jonas',lastName:'Mathias',status:'Planned',vesselSize:'4000',vesselType:'Conventional',shippingAgent:'LBH SHIPPING SERVICES (M) SDN BHD',loa:'229.00',grt:'43502',lastPort:'Aarhus',nextPort:'Aachen',finalPort:'-',createdBy:'Smith Jonas',createdDate:'03/07/2022',modifiedBy:'Smith Jonas',modifiedDate:'03/07/2022'},
]


  constructor(
    private dashboardService : DashboardService,
    private toastr: ToastrService,
    private spinner : NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    // $("table#ProductTable").removeClass("table-striped");
    // $("table#ProductTable").addClass("table-striped");
  }

  collapseRemainingRows(index:any){
    for(var i=0;i<=this.tableData.length-1;i++){
      var element = document.getElementById('rowLine'+ i);
      var ele = document.getElementById('demo'+ i);
      if(i==index){
      }
      else{
        element?.classList.add("collapsed");
        ele?.classList.remove("show");
      }
    }
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

  leftExpand(){
    this.leftExpandIcon = false;
    var element = document.getElementById("userGroup");
    if(element?.classList.contains('show-overview'))
    {
      element?.classList.remove("show-overview");
    }
  }


  leftMinimise(){
    this.leftExpandIcon = true;
    var element = document.getElementById("userGroup");
    element?.classList.add("show-overview");
    //left main menu collapse
    localStorage.setItem("bigMenu", 'false');
    var element1 = document.getElementById("main");
    element1?.classList.add("small-menu");
    this.dashboardService.setNavCollapseStatus(false);
  }

  rightMinimise(){
    var element = document.getElementById("leftSection");
    element?.classList.remove("show-right-overview");
    var element1 = document.getElementById("rightSection");
    element1?.classList.add("ml-3");
    this.rightExpandIcon = true;
  }

  rightExpand(){
    var element = document.getElementById("leftSection");
    element?.classList.add("show-right-overview");
    var element1 = document.getElementById("rightSection");
    element1?.classList.remove("ml-3");
    this.rightExpandIcon = false;
  }


  view(){
    this.mode = 'view';
    this.leftMinimise();
  }

  edit(){
    this.mode = 'edit';
    this.leftMinimise();
  }

  save(){
    this.mode = 'view';
    this.toastr.success('', 'Saved successfully');
  }

  deleteSave(){
    this.toastr.success('', 'Deleted successfully');
    // this.toastr.warning('', 'Can not delete');
    // this.toastr.error('', 'error');
  }

}
