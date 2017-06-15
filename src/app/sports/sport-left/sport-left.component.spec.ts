import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLeftComponent } from './sport-left.component';

describe('SportLeftComponent', () => {
  let component: SportLeftComponent;
  let fixture: ComponentFixture<SportLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
