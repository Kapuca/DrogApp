import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-droge',
  template: `
    <div id='main'>
      <app-nav-header></app-nav-header>
		<div class="tab" id="tabDroge">
        <button class="tablinksDroge" id="tabInfo" (click)="open('info', $event)" onclick="this.blur();">{{ 'info' | uppercase }}</button>
        <button class="tablinksDroge" id="tabUcinki" (click)="open('efekt', $event)" onclick="this.blur();">{{ 'učinek' | uppercase }}</button>
        <button class="tablinksDroge" id="tabDoza" (click)="open('doza', $event)" onclick="this.blur();">{{ 'odmerek' | uppercase }}</button>
        <button class="tablinksDroge" id="tabRisk" (click)="open('risk', $event)" onclick="this.blur();">{{ 'tveganja' | uppercase }}</button>
		  <div id="tabBorder"></div>
      </div>
      <div id='content'>
        <p class="basic-txt" [style.display]="display('info')" [innerHTML]='droga.info'></p>
        <p class="basic-txt" [style.display]="display('risk')"  [innerHTML]='droga.risk'></p>
        <p class="basic-txt" [style.display]="display('doza')"  [innerHTML]='droga.doza'></p>
        <p class="basic-txt" [style.display]="display('efekt')"  [innerHTML]='droga.efekt'></p>
      </div>
    </div>
    <div id='moreInfo'>
		 <a [href]="droga.link">
			<img id="vecICO" src='assets/img/more.svg'/>
		 </a>
	 </div>
  `,
  styles: [
    '#content { top: 140px; }',
    '#moreInfo { position: fixed; bottom: 61px; right: 15px; background: linear-gradient(to right bottom, rgb(238, 213, 134, 0.6), rgb(238, 213, 134, 1)); }',
  ]
})
export class DrogeComponent implements OnInit {

  droga: any;
  openedTab: string;
  tabGroupBorderEl: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.openedTab = 'info';
	 this.tabGroupBorderEl = document.getElementById("tabBorder");
    this.route.url.subscribe(segs =>
      this.ds.getData(segs[0].toString(), +segs[1].toString()).subscribe(res =>
        this.droga = res[0])
    );
  }

  open(attr: string, el: any): void{
	 this.tabGroupBorderEl.style.backgroundColor = window.getComputedStyle(el.target).backgroundColor;
    this.openedTab = attr;
  }

  display(attr: string): string{
    if (attr === this.openedTab) { return 'block'; }
    return 'none';
  }

}
