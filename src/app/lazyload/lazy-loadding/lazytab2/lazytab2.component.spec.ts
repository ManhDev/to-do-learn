import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazytab2Component } from './lazytab2.component';

describe('Lazytab2Component', () => {
  let component: Lazytab2Component;
  let fixture: ComponentFixture<Lazytab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lazytab2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazytab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
