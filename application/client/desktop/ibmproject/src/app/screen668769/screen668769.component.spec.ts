import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen668769Component } from './screen668769.component';

describe('Screen668769Component', () => {
  let component: Screen668769Component;
  let fixture: ComponentFixture<Screen668769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen668769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen668769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});