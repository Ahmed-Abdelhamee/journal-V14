import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResearchesComponent } from './admin-researches.component';

describe('AdminResearchesComponent', () => {
  let component: AdminResearchesComponent;
  let fixture: ComponentFixture<AdminResearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminResearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
