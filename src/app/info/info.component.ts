import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data/data.service';
import { GeneralService } from '../general/general.service';

@Component({
  selector: 'app-info',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div class='section'>
        <h2 *ngIf='egg < 7' (click)='hatch()'>{{info.firsttitle | uppercase}}</h2>
        <div id='duck' *ngIf='egg >= 7'> <input #txt /><button (click)='quack()'>Quack</button> </div>
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
    'h2 {text-align: center; font-size: 16px; letter-spacing: 0.1em; padding: 15px; margin: 0;}',
    '.section:nth-child(2n+1) { background: #f4f4f4; }',
    '#duck { text-align: center; padding: 15px;}',
    'input { text-align: center; }',
    'p {text-align: justify;}',
  ]
})
export class InfoComponent implements OnInit {

  info: any;
  egg = 0;
  @ViewChild('txt', { static: false }) txt: ElementRef;


  constructor( private ds: DataService, private gs: GeneralService) { }

  ngOnInit(): void {
    this.ds.getData('info').subscribe(
      data => this.info = data[0],
      error => this.info = {firsttitle: 'DB connectiion not working', firsttext: error.message, secondtitle: '', secondtext: ''}
      );
  }

  hatch(): void {
    this.egg++;
  }

  quack(): void {
    this.gs.addTile(this.txt.nativeElement.value);
    this.txt.nativeElement.value = '';
  }

}
