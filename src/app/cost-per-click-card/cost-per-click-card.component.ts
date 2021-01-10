import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { last, map } from 'rxjs/operators';
import { chartGroup, chartGroupItem } from '../shared/app.model';
import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'cost-per-click-card',
  templateUrl: './cost-per-click-card.component.html',
  styleUrls: ['./cost-per-click-card.component.scss'],
})
export class CostPerChartComponent implements OnInit {
  costPerClick: chartGroupItem[] = [];
   avarage: chartGroupItem[] = [];

  view: [number, number] = [250, 200];
  colorScheme = { domain: ['#e7e7e7'] };

  constructor(
    private dataService: DataService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.dataService.clicks$,
       this.dataService.cost$,
      this.dataService.conversions$])
      .pipe(
        map(([clicks, cost, conversions]) => {
          clicks.map((dailyClick) => {
            this.costPerClick.push({
              name: dailyClick.name,
              value: this.getCostPerClick(dailyClick, cost),
            });
          });
          last();
        })
      )
      .subscribe(() => {
        const costPerClicks = this.costPerClick.map(costPerClicks=> costPerClicks.value);
        this.avarage.push({name:'Avarage Cost per Click', value:this.utilService.getAverage(costPerClicks)});
      });
  }

  getCostPerClick(dailyClick: chartGroupItem, cost: chartGroupItem[]): number {
    const dailyCost = cost.find((cost) => cost.name === dailyClick.name);
    return dailyCost.value / dailyClick.value;
  }


}
