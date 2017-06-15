import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLandingComponent } from './sport-landing.component';

describe('SportLandingComponent', () => {
  let component: SportLandingComponent;
  let fixture: ComponentFixture<SportLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
