import { Component, OnInit } from '@angular/core';
import sample from '../assets/sample.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = sample.title;
  constructor() {}

  ngOnInit() {}
}
