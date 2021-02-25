import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryRouteComponent } from './auxiliary-route.component';

describe('AuxiliaryRouteComponent', () => {
  let component: AuxiliaryRouteComponent;
  let fixture: ComponentFixture<AuxiliaryRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaryRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
