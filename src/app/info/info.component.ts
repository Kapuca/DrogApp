import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-info',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div class='section'>
        <h2>{{info.firsttitle | uppercase}}</h2>
        <p class="basic-txt" [innerHTML]='info.firsttext'><p>
      </div>
      <div class='section'>
        <h2>{{info.secondtitle | uppercase}}</h2>
        <p class="basic-txt" [innerHTML]='info.secondtext'><p>
      </div>
    </div>
  </div>
  `,
  styles: [
    'h2 {text-align: center; font-size: 16px; letter-spacing: 0.1em; padding-bottom: 15px;}',
    '.section:nth-child(2n+1) { background: #f4f4f4; }',
    'p {text-align: justify;}',
	 '#content {position: absolute; top: calc(64px + 45px); width: 100%; z-index: 0;}'
  ]
})
export class InfoComponent implements OnInit {

  info: any;



  constructor( private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData('info').subscribe(
      data => this.info = data[0],
      error => this.info = {firsttitle: 'DB connectiion not working', firsttext: error.message, secondtitle: '', secondtext: ''}
      );
  }

}
