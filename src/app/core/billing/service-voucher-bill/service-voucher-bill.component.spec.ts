import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVoucherBillComponent } from './service-voucher-bill.component';

describe('ServiceVoucherBillComponent', () => {
  let component: ServiceVoucherBillComponent;
  let fixture: ComponentFixture<ServiceVoucherBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceVoucherBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceVoucherBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
