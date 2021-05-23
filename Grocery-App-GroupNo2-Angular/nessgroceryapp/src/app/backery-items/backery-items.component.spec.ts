import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackeryItemsComponent } from './backery-items.component';

describe('BackeryItemsComponent', () => {
  let component: BackeryItemsComponent;
  let fixture: ComponentFixture<BackeryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackeryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackeryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
