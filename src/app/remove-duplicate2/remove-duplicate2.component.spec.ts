import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDuplicate2Component } from './remove-duplicate2.component';

describe('RemoveDuplicate2Component', () => {
  let component: RemoveDuplicate2Component;
  let fixture: ComponentFixture<RemoveDuplicate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveDuplicate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDuplicate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
