import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionwaitingComponent } from './revisionwaiting.component';

describe('RevisionwaitingComponent', () => {
  let component: RevisionwaitingComponent;
  let fixture: ComponentFixture<RevisionwaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionwaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionwaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
