import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmyprofileComponent } from './navbarmyprofile.component';

describe('NavbarmyprofileComponent', () => {
  let component: NavbarmyprofileComponent;
  let fixture: ComponentFixture<NavbarmyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarmyprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarmyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
