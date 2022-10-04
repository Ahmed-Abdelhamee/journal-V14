import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResearchesComponent } from './new-researches.component';

describe('NewResearchesComponent', () => {
  let component: NewResearchesComponent;
  let fixture: ComponentFixture<NewResearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
