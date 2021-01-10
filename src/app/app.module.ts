import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ComboChartComponent,
  ComboSeriesVerticalComponent,
} from './shared/combo-chart';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { SummaryChartComponent } from './sum-all-data-chart/sum-all-data-chart.component';
import { CostPerClickComponent } from './clicks-conversions-pie-chart/clicks-conversions-pie-chart.component';
import { CostPerChartComponent } from './cost-per-click-card/cost-per-click-card.component';
import { ConversionChartComponent } from './conversion-chart/conversion-chart.component';
import { TotalCostComponent } from './total-cost-card/total-cost-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent,
    SummaryChartComponent,
    CostPerClickComponent,
    CostPerChartComponent,
    ConversionChartComponent,
    TotalCostComponent,
  ],
  imports: [BrowserModule, NgxChartsModule, BrowserAnimationsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
