import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPerChartComponent } from './cost-per-click-card.component';

describe('CostPerChartComponent', () => {
  let component: CostPerChartComponent;
  let fixture: ComponentFixture<CostPerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
