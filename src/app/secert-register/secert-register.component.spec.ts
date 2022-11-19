import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecertRegisterComponent } from './secert-register.component';

describe('SecertRegisterComponent', () => {
  let component: SecertRegisterComponent;
  let fixture: ComponentFixture<SecertRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecertRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecertRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
