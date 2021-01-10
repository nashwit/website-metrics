import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { last, map } from 'rxjs/operators';
import { chartGroupItem } from '../shared/app.model';
import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'clicks-conversions-pie-chart',
  templateUrl: './clicks-conversions-pie-chart.component.html',
  styleUrls: ['./clicks-conversions-pie-chart.component.scss'],
})
export class CostPerClickComponent implements OnInit {
  single: chartGroupItem[] = [];
  view: [number, number] = [800, 250];
  colorScheme = { domain: ['#67ccea', '#f99608'] };
  gradient: boolean = true;
  label: string = 'total';

  constructor(
    private dataService: DataService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    combineLatest([this.dataService.clicks$, this.dataService.conversions$])
      .pipe(
        map(([clicks, conversions]) => {
          const clickSum = this.utilService.getSum(
            clicks.map((item) => item.value)
          );
          const conversionSum = this.utilService.getSum(
            conversions.map((item) => item.value)
          );
          this.single.push(
            {
              name: 'Clicks',
              value: clickSum - conversionSum,
            },
            {
              name: 'Conversions',
              value: conversionSum,
            }
          );
        })
      )
      .subscribe();
  }
}
