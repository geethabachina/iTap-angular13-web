import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipParticularComponent } from './ship-particular.component';

describe('ShipParticularComponent', () => {
  let component: ShipParticularComponent;
  let fixture: ComponentFixture<ShipParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
