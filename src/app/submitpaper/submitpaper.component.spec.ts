import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitpaperComponent } from './submitpaper.component';

describe('SubmitpaperComponent', () => {
  let component: SubmitpaperComponent;
  let fixture: ComponentFixture<SubmitpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
