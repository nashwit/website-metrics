import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { last, map } from 'rxjs/operators';
import { chartGroup, chartGroupItem } from '../shared/app.model';
import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'app-conversion-chart',
  templateUrl: './conversion-chart.component.html',
  styleUrls: ['./conversion-chart.component.scss'],
})
export class ConversionChartComponent implements OnInit {
  costPerClick: chartGroupItem[] = [];
  single: chartGroup[] = [];
  avarage: chartGroupItem[] = [];

  view: [number, number] = [800, 200];
  colorScheme = { domain: ['#30E07B'] };
  gradient: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  yAxisLabel: string = 'Conversions';
  legend: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  constructor(
    private dataService: DataService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.dataService.clicks$,
      this.dataService.cost$,
      this.dataService.conversions$,
    ])
      .pipe(
        map(([clicks, cost, conversions]) => {
          this.single = [{ name: 'conversions', series: [...conversions] }];
        }),
        last()
      )
      .subscribe(() => {
        const costPerClicks = this.costPerClick.map(
          (costPerClicks) => costPerClicks.value
        );
        this.avarage.push({
          name: 'Avarage Cost per Click',
          value: this.utilService.getAverage(costPerClicks),
        });
      });
  }
}
