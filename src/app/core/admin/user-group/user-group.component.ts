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
  role: any = '';
  mode: any = 'view';
  // mode: any ;
  rightExpandIcon: boolean = true;
  leftExpandIcon: boolean = false;
  tableData: any = [
    {loginId:'KGL1000777',userName:'FARHANA',userRole:'ONLINE IID/IED FOR FA',lastLoginTime:'01/08/2022 07:54',groupName:'KGL KUL SDN BHD',createdBy:'PRIVAPORT',createdDate:'30/03/2015 00:50',modifiedBy:'NOOR ISMAH IZZATI	',modifiedDate:'08/12/2021 16:52',designation:'OPERATION ASSISTANT 2	',staffGroup:'GROUP C',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'31694000',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'$#BBM7145',userName:'S.MUNUSAMY',userRole:'ONLINE IID/IED FOR FA',lastLoginTime:'',groupName:'UMS MARITIME SERVICES SDN BHD	',createdBy:'INNDRAN',createdDate:'12/03/2020 14:46',modifiedBy:'',modifiedDate:'',designation:'',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10124',userName:'MUHAMAD AIZAT',userRole:'OPERATION ASSISTANT 2	',lastLoginTime:'01/08/2022 07:54',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'NOOR ISMAH IZZAT',modifiedDate:'',designation:'OPERATION ASSISTANT 2	',staffGroup:'GROUP C',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10125',userName:'MUHAMAD SHAHID',userRole:'TRAFFIC CONTROLLER	',lastLoginTime:'01/08/2022 13:59',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'TRAFFIC CONTROLLER	',staffGroup:'GROUP C',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'1017',userName:'KAMALANATHAN',userRole:'ULC OPERATOR	',lastLoginTime:'',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'RAMESH A/L CHANDRAMOHAN	',modifiedDate:'',designation:'ULC OPERATOR	',staffGroup:'GROUP A',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'1028649-H',userName:'DORRIS DEVI A/P SHITLER',userRole:'DAILY VESSEL SCHEDULE & POGP	',lastLoginTime:'27/06/2022 13:55',groupName:'NESHJUMBO SDN BHD	',createdBy:'PRIVAPORT',createdDate:'08/12/2021 16:52',modifiedBy:'PRIVAPORT',modifiedDate:'',designation:'',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'1028649-HH',userName:'ADRIAN SUNILRAJ AROKIASAMY',userRole:'DAILY VESSEL SCHEDULE & POGP	',lastLoginTime:'18/08/2021 14:00',groupName:'NESHJUMBO SDN BHD	',createdBy:'PRIVAPORT',createdDate:'08/12/2021 16:52',modifiedBy:'PRIVAPORT',modifiedDate:'',designation:'',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10456',userName:'MOHD FAIZAL WAHILA	',userRole:'PP FRONT OFFICE	',lastLoginTime:'29/07/2022 00:25',groupName:'WESTPORTS',createdBy:'AHMAD',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'',staffGroup:'',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10837',userName:'MOHAMAD AKMAL	',userRole:'OPERATION ASSISTANT 1	',lastLoginTime:'30/07/2022 12:56',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'HELPDESK',modifiedDate:'',designation:'OPERATION ASSISTANT 1	',staffGroup:'GROUP C',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10942',userName:'AZTEE ABIDIN',userRole:'BERTH PLANNER	',lastLoginTime:'28/07/2022 19:59',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'',staffGroup:'',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10943',userName:'MOHAMAD FAZRULZAMAN	',userRole:'TRAFFIC CONTROLLER	',lastLoginTime:'31/07/2022 14:36',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'',staffGroup:'GROUP B',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'10998',userName:'SALLEH BIN JAMALUDDIN	',userRole:'OPERATION ASSISTANT 1	',lastLoginTime:'01/08/2022 15:20	',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'HELPDESK',modifiedDate:'',designation:'',staffGroup:'GROUP C',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11023',userName:'THIRUNA',userRole:'SHIFT OPERATION EXECUTIVE	',lastLoginTime:'01/08/2022 14:50',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'TRAFFIC CONTROLLER	',staffGroup:'',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11103',userName:'HELFI - WP',userRole:'CSC BILLING SUPERVISOR	',lastLoginTime:'',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'HELPDESK	',modifiedDate:'',designation:'OPERATION ASSISTANT 1	',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'1126',userName:'HASBULAH',userRole:'BERTH PLANNER	',lastLoginTime:'01/08/2022 16:59',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'RAMESH A/L CHANDRAMOHAN	',modifiedDate:'',designation:'SHIFT OPERATION EXECUTIVE	',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11307',userName:'ALIF',userRole:'BERTH PLANNER',lastLoginTime:'',groupName:'WESTPORTS',createdBy:'INNDRAN',createdDate:'08/12/2021 16:52',modifiedBy:'Mohd Idrul Amir	',modifiedDate:'',designation:'OPERATION ASSISTANT 2	',staffGroup:'',status:'INACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11331',userName:'MUHAMED NASSER	',userRole:'OPERATION ASSISTANT 2	',lastLoginTime:'02/06/2020 11:58	',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'HELPDESK	',modifiedDate:'',designation:'OPERATION ASSISTANT 2	',staffGroup:'GROUP D',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11337',userName:'MOHD KHAIRUL AZRI	',userRole:'OPERATION ASSISTANT 2	',lastLoginTime:'06/09/2020 15:24',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN',modifiedDate:'',designation:'OPERATION ASSISTANT 1		',staffGroup:'GROUP D',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11338',userName:'MOHAMAD KAMARUL	',userRole:'OPERATION ASSISTANT 2	',lastLoginTime:'01/08/2022 17:38	',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'HELPDESK',modifiedDate:'',designation:'OPERATION ASSISTANT 2		',staffGroup:'GROUP A',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
    {loginId:'11339',userName:'MOHAMAD HALMI	',userRole:'OPERATION ASSISTANT 2	',lastLoginTime:'01/08/2022 15:49',groupName:'WESTPORTS',createdBy:'Application Admin',createdDate:'08/12/2021 16:52',modifiedBy:'INNDRAN	',modifiedDate:'',designation:'OPERATION ASSISTANT 2	',staffGroup:'GROUP A',status:'ACTIVE',email:'SEADIVISIO2@KGLKUL.COM',phone:'',passport:'',userGroup:'KGL KUL SDN BHD'},
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
