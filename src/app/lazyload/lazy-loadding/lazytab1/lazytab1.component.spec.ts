import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazytab1Component } from './lazytab1.component';

describe('Lazytab1Component', () => {
  let component: Lazytab1Component;
  let fixture: ComponentFixture<Lazytab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazytab1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazytab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
