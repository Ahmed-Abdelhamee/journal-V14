import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecertaryComponent } from './secertary.component';

describe('SecertaryComponent', () => {
  let component: SecertaryComponent;
  let fixture: ComponentFixture<SecertaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecertaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecertaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
