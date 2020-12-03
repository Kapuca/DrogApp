import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { GeneralService } from '../general/general.service';

@Component({
  selector: 'app-info',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div class='section'>
        <h2 *ngIf='egg < 7' (click)='hatch()'>{{info.firsttitle | uppercase}}</h2>
        <div id='duck' *ngIf='egg >= 7'> <input #txt /><button (click)='quack()'>Quack</button> </div>
        <p class="basic-txt" [innerHTML]='info.firsttext'></p>
      </div>
      <div class='section'>
        <h2>{{info.secondtitle | uppercase}}</h2>
        <p class="basic-txt" [innerHTML]='info.secondtext'></p>
      </div>
	    <div *ngIf='info.thirdtitle' class='section'>
        <h2>{{info.thirdtitle | uppercase}}</h2>
        <p class="basic-txt" [innerHTML]='info.thirdtext'></p>
      </div>
    </div>
  </div>
  `,
  styles: [
    'h2 { text-align: center; font-size: 16px; letter-spacing: 0.1em; padding: 15px 15px 0px 15px; margin: 0; }',
    '.section:nth-child(2n+1) { background: #f4f4f4; text-align-last: center; }',
    '.section:nth-child(2n+1):last-child > p { margin-block-end: 0px; }',
    '#duck { text-align: center; padding: 15px;}',
    'input { text-align: center; }',
    'p { text-align: justify; }',
    '.basic-txt { padding: 5px 20px 20px 20px; }'
  ]
})
export class InfoComponent implements OnInit, OnDestroy {

  info: any;
  /*Treba prestavit v bazo*/
  appDescTitle = 'O aplikaciji DROGAPP';
  appDescText = 'Aplikacija informira in osvešča o manj tvegani uporabi drog. Informacije v aplikaciji so informativne narave, <i>vsi uporabniki jih uporabljajo na lastno odgovornost</i>.<br><br><b>Edina varna uporaba je neuporaba!</b>';
  egg = 0;
  @ViewChild('txt', { static: false }) txt: ElementRef;


  constructor( private ds: DataService, private gs: GeneralService) { }

  ngOnInit(): void {
    this.ds.getData('info').subscribe(
      data => this.info = data[0],
      error => this.info = {firsttitle: 'DB connectiion not working', firsttext: error.message, secondtitle: '', secondtext: ''}
      );
  }

  ngOnDestroy(): void {
    window.scrollTo({top: 0});
  }

  hatch(): void {
    this.egg++;
  }

  quack(): void {
    this.gs.addTile(this.txt.nativeElement.value);
    this.txt.nativeElement.value = '';
  }

}
