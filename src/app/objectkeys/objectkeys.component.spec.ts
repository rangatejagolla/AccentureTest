import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectkeysComponent } from './objectkeys.component';

describe('ObjectkeysComponent', () => {
  let component: ObjectkeysComponent;
  let fixture: ComponentFixture<ObjectkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
