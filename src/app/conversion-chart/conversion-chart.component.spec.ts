import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionChartComponent } from './conversion-chart.component';

describe('ConversionChartComponent', () => {
  let component: ConversionChartComponent;
  let fixture: ComponentFixture<ConversionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
