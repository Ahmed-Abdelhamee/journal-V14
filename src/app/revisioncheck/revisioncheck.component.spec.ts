import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisioncheckComponent } from './revisioncheck.component';

describe('RevisioncheckComponent', () => {
  let component: RevisioncheckComponent;
  let fixture: ComponentFixture<RevisioncheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisioncheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisioncheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
