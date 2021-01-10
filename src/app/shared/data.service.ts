import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subscription } from 'rxjs';
import {  map } from 'rxjs/operators';
import sample from '../../assets/sample.json';
import { chartGroupItem } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  JsonData = sample.data;

  private conversions: BehaviorSubject<chartGroupItem[]> = new BehaviorSubject([]);
  public readonly conversions$: Observable<chartGroupItem[]> = this.conversions.asObservable();

  private clicks: BehaviorSubject<chartGroupItem[]> = new BehaviorSubject([]);
  public readonly clicks$: Observable<chartGroupItem[]> = this.clicks.asObservable();

  private cost: BehaviorSubject<chartGroupItem[]> = new BehaviorSubject([]);
  public readonly cost$: Observable<chartGroupItem[]> = this.cost.asObservable();

  private impressions: BehaviorSubject<chartGroupItem[]> = new BehaviorSubject([]);
  public readonly impressions$: Observable<chartGroupItem[]> = this.impressions.asObservable();

  constructor(private datePipe: DatePipe) {
    this.getSampleData();
  }


getSampleData(){
  from(this.JsonData)
  .pipe(
    map((data) => {
      for (let subjectKey in data) {
        if (data.timestamp !== data[subjectKey])
          this.insertSubjectKey(subjectKey, data.timestamp, data[subjectKey]);
      }
    })
    ).subscribe();
}

  insertSubjectKey(subjectKey: string, timestamp: string, value: number): void {
    this[subjectKey].next([
      ...this[subjectKey].getValue(),
      this.createChartGroupItem(timestamp, value),
    ]);
  }
  createChartGroupItem(timestamp: string, value: number): chartGroupItem {
    return {
      name: this.formatDate(timestamp),
      value,
    };
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd.MM.yy');
  }
}
