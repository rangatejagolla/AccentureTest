import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseEveryWord2Component } from './reverse-every-word2.component';

describe('ReverseEveryWord2Component', () => {
  let component: ReverseEveryWord2Component;
  let fixture: ComponentFixture<ReverseEveryWord2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseEveryWord2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseEveryWord2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
