import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {


  getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer)
    return sum / arr.length;
  }

  getSum = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer)
    return sum;
  }
}
