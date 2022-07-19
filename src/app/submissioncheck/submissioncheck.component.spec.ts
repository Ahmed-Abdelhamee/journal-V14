import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissioncheckComponent } from './submissioncheck.component';

describe('SubmissioncheckComponent', () => {
  let component: SubmissioncheckComponent;
  let fixture: ComponentFixture<SubmissioncheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissioncheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissioncheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
