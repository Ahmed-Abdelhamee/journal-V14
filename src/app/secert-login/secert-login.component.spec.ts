import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecertLoginComponent } from './secert-login.component';

describe('SecertLoginComponent', () => {
  let component: SecertLoginComponent;
  let fixture: ComponentFixture<SecertLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecertLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecertLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
