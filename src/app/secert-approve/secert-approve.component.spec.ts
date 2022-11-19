import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecertApproveComponent } from './secert-approve.component';

describe('SecertApproveComponent', () => {
  let component: SecertApproveComponent;
  let fixture: ComponentFixture<SecertApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecertApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecertApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
