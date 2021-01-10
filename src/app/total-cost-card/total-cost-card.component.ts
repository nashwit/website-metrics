import { Component, OnInit } from '@angular/core';
import { last, map } from 'rxjs/operators';
import { chartGroup, chartGroupItem } from '../shared/app.model';
import { DataService } from '../shared/data.service';
import { UtilService } from '../shared/util.service';

@Component({
  selector: 'total-cost-card',
  templateUrl: './total-cost-card.component.html',
  styleUrls: ['./total-cost-card.component.scss']
})
export class TotalCostComponent implements OnInit {
   cost: number[]= [];
   totalCost:chartGroupItem[] = [];

   view:[number,number] = [250,200];
   colorScheme = {domain: ['#b6e9ff']};

   constructor(
    private dataService: DataService,
    private utilService: UtilService
  ) {}

  ngOnInit(): void {
       this.dataService.cost$
      .pipe(
        map(dailyCosts => {
           dailyCosts.map(dailyCost=>{
          this.cost.push(dailyCost.value)})
          }) )
      .subscribe(() => {
         const cost = this.cost.map(value=> value);
        this.totalCost.push({name:'Total Cost', value:this.utilService.getSum(cost)});
      });
  }
}
