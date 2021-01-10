import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryChartComponent } from './sum-all-data-chart.component';

describe('SummaryChartComponent', () => {
  let component: SummaryChartComponent;
  let fixture: ComponentFixture<SummaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
