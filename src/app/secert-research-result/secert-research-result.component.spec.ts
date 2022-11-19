import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecertResearchResultComponent } from './secert-research-result.component';

describe('SecertResearchResultComponent', () => {
  let component: SecertResearchResultComponent;
  let fixture: ComponentFixture<SecertResearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecertResearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecertResearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
