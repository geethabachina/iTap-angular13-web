import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class DashboardService {
  refreshCollapse$: EventEmitter<{}>;

  constructor() {
    this.refreshCollapse$ = new EventEmitter();
   }


   public setNavCollapseStatus(val:any) {
    localStorage.setItem("collapse-nav", val.toString());
    this.refreshCollapse$.emit(val);
  }
}
