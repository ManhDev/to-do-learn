import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoaddingComponent } from './lazy-loadding.component';

describe('LazyLoaddingComponent', () => {
  let component: LazyLoaddingComponent;
  let fixture: ComponentFixture<LazyLoaddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoaddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoaddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
