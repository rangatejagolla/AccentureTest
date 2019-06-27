import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseEveryWordComponent } from './reverse-every-word.component';

describe('ReverseEveryWordComponent', () => {
  let component: ReverseEveryWordComponent;
  let fixture: ComponentFixture<ReverseEveryWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseEveryWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseEveryWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
