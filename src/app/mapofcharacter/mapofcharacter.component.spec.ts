import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapofcharacterComponent } from './mapofcharacter.component';

describe('MapofcharacterComponent', () => {
  let component: MapofcharacterComponent;
  let fixture: ComponentFixture<MapofcharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapofcharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapofcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
