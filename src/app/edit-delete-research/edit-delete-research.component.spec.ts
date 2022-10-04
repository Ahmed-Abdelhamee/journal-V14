import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteResearchComponent } from './edit-delete-research.component';

describe('EditDeleteResearchComponent', () => {
  let component: EditDeleteResearchComponent;
  let fixture: ComponentFixture<EditDeleteResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
