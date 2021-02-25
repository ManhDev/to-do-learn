import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactiveComponent } from './can-deactive.component';

describe('CanDeactiveComponent', () => {
  let component: CanDeactiveComponent;
  let fixture: ComponentFixture<CanDeactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanDeactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
