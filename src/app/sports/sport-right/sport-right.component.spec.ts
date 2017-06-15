import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportRightComponent } from './sport-right.component';

describe('SportRightComponent', () => {
  let component: SportRightComponent;
  let fixture: ComponentFixture<SportRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
