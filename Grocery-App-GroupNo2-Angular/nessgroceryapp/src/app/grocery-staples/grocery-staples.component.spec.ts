import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryStaplesComponent } from './grocery-staples.component';

describe('GroceryStaplesComponent', () => {
  let component: GroceryStaplesComponent;
  let fixture: ComponentFixture<GroceryStaplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryStaplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryStaplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
