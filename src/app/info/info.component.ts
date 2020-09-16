import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-info',
  template: `
  <app-nav-header></app-nav-header>
    <div>
      <h2>{{info.firsttitle | uppercase}}</h2>
      <p>{{info.firsttext}}</p>
    </div>
    <div>
      <h2>{{info.secondtitle | uppercase}}</h2>
      <p>{{info.secondtext}}</p>
    </div>
  `,
  styles: [
    'h2 {text-align: center; font-size: 16px; letter-spacing: 0.1em; padding-bottom: 15px;}',
    'div:nth-child(2n+1) { background: #f4f4f4; }',
    'p {text-align: justify;}'
  ]
})
export class InfoComponent implements OnInit {

  info: any;



  constructor( private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData('info').subscribe(data => this.info = data[0]);
  }

}
