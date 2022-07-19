import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchCollectionComponent } from './research-collection.component';

describe('ResearchCollectionComponent', () => {
  let component: ResearchCollectionComponent;
  let fixture: ComponentFixture<ResearchCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
