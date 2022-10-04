import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettings2Component } from './admin-settings2.component';

describe('AdminSettings2Component', () => {
  let component: AdminSettings2Component;
  let fixture: ComponentFixture<AdminSettings2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSettings2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
