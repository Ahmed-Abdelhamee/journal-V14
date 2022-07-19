import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardReviewersDataComponent } from './board-reviewers-data.component';

describe('BoardReviewersDataComponent', () => {
  let component: BoardReviewersDataComponent;
  let fixture: ComponentFixture<BoardReviewersDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardReviewersDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardReviewersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
