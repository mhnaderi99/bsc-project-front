import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyTableComponent } from './accuracy-table.component';

describe('AccuracyTableComponent', () => {
  let component: AccuracyTableComponent;
  let fixture: ComponentFixture<AccuracyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccuracyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccuracyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
