import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPerClickComponent } from './clicks-conversions-pie-chart.component';

describe('CostPerClickComponent', () => {
  let component: CostPerClickComponent;
  let fixture: ComponentFixture<CostPerClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPerClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPerClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
