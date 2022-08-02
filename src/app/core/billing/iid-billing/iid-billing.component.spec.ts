import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IidBillingComponent } from './iid-billing.component';

describe('IidBillingComponent', () => {
  let component: IidBillingComponent;
  let fixture: ComponentFixture<IidBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IidBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IidBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
