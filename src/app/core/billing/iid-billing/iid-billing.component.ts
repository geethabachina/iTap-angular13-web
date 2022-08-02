import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-iid-billing',
  templateUrl: './iid-billing.component.html',
  styleUrls: ['./iid-billing.component.css']
})
export class IidBillingComponent implements OnInit {
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
    {billNumber:'0001054431',vesselName:'CANOPUS LEADER',vesselType:'RORO',svn:'227BLH',documentNo:'WPI086866',paymentMode:'LEDGER',billToCustomer:'JOMAJU SDN BHD - TJ039',billDate:'02/08/2022',billedAmount:'1209',postDate:'02/08/2022',cancelledDate:'02/08/2022',createdBy:'NOOR ISMAH IZZATI',createdDate:'02/08/2022 00:50',modifiedBy:'NOOR ISMAH IZZATI	',modifiedDate:'02/08/2022 16:52'},
    {billNumber:'0001054428',vesselName:'SIEM CURIE',vesselType:'RORO',svn:'226CKJ',documentNo:'WPI087060',paymentMode:'LEDGER',billToCustomer:'MULIA MOTOR CORPORATION SDN BHD - TM138',billDate:'02/08/2022',billedAmount:'45',postDate:'',cancelledDate:'',createdBy:'NOOR ISMAH IZZATI',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054446',vesselName:'SIEM CURIE',vesselType:'RORO',svn:'227AKU',documentNo:'WPI086992',paymentMode:'LEDGER',billToCustomer:'MULIA MOTOR CORPORATION SDN BHD - TM138',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054445',vesselName:'TRANS HARMONY 2',vesselType:'RORO',svn:'226BRX',documentNo:'WPI087098',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'495',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054444',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226CKJ',documentNo:'WPI087070',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'45',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054443',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226CKJ',documentNo:'WPI087071',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054442',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226CKJ',documentNo:'WPI087075',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054441',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226CKJ',documentNo:'WPI087059',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054440',vesselName:'TRANS HARMONY 2',vesselType:'RORO',svn:'227BVC',documentNo:'WPI087115',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'975',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054439',vesselName:'TRANS HARMONY 2',vesselType:'RORO',svn:'227BVC',documentNo:'WPI087117',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'732',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054431',vesselName:'TRANS HARMONY 2',vesselType:'RORO',svn:'227BVC',documentNo:'WPI086866',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'1209',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054428',vesselName:'CANOPUS LEADER',vesselType:'RORO',svn:'226BVC',documentNo:'WPI087060',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054427',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226BVC',documentNo:'WPI087063',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054426',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226BVC',documentNo:'WPI087064',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054425',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226BVC',documentNo:'WPI087053',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054424',vesselName:'JASA MURNI',vesselType:'RORO',svn:'227AFN',documentNo:'WPI087058',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054423',vesselName:'JASA MURNI',vesselType:'RORO',svn:'226AFN',documentNo:'WPI087094',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054422',vesselName:'MATSURI',vesselType:'RORO',svn:'227AFN',documentNo:'WPI086664-2',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'3955',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054421',vesselName:'JASA MURNI',vesselType:'RORO',svn:'227AFN',documentNo:'WPI087062',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'22',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
    {billNumber:'0001054420',vesselName:'MATSURI',vesselType:'RORO',svn:'227AFN',documentNo:'WPI086666-2',paymentMode:'LEDGER',billToCustomer:'',billDate:'02/08/2022',billedAmount:'2105',postDate:'',cancelledDate:'',createdBy:'',createdDate:'',modifiedBy:'',modifiedDate:''},
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

  add(){
    this.mode = 'add';
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

