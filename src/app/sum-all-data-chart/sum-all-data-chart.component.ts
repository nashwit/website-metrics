import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { chartGroup, chartGroupItem } from '../shared/app.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'sum-all-data-chart',
  templateUrl: './sum-all-data-chart.component.html',
  styleUrls: ['./sum-all-data-chart.component.scss'],
})
export class SummaryChartComponent implements OnInit {
  width = 1000;
  height = 300;
  view = [this.width, this.height];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  legendTitle = '';
  legendPosition = 'below';
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Impressions';
  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Conversions, Clicks, Cost';

  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;

  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#67ccea', '#b6e9ff', '#f99608'],
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#b6e9ff'],
  };

  barChart: chartGroupItem[];
  lineChart: chartGroup[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    combineLatest([
      this.dataService.clicks$,
      this.dataService.conversions$,
      this.dataService.cost$,
      this.dataService.impressions$,
    ])
      .pipe(
        map(([clicks, conversions, cost, impressions]) => {
          this.lineChart = [
            { name: 'conversions', series: [...conversions] },
            { name: 'clicks', series: [...clicks] },
            { name: 'cost', series: [...cost] },
          ];
          this.barChart = [...impressions];
        })
      )
      .subscribe();
  }

  changeWidth(newWidth: number) {
    this.width = newWidth;
    this.view = [this.width, this.height];
  }
}
