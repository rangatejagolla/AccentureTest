import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisandletComponent } from './thisandlet.component';

describe('ThisandletComponent', () => {
  let component: ThisandletComponent;
  let fixture: ComponentFixture<ThisandletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisandletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisandletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
