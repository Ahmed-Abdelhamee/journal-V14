import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsapprovalComponent } from './authorsapproval.component';

describe('AuthorsapprovalComponent', () => {
  let component: AuthorsapprovalComponent;
  let fixture: ComponentFixture<AuthorsapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
