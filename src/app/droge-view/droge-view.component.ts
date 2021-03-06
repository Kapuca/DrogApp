import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-droge-view',
  template: `
    <div class="tab" id="tabDroge">
        <button class="tablinksDroge" id="tabInfo" (click)="open('info', $event)" onclick="this.blur();">{{ 'info' | uppercase }}</button>
        <button class="tablinksDroge" id="tabUcinki" (click)="open('efekt', $event)" onclick="this.blur();">{{ 'učinek' | uppercase }}</button>
        <button class="tablinksDroge" id="tabDoza" (click)="open('doza', $event)" onclick="this.blur();">{{ 'odmerek' | uppercase }}</button>
        <button class="tablinksDroge" id="tabRisk" (click)="open('risk', $event)" onclick="this.blur();">{{ 'tveganja' | uppercase }}</button>
		    <div id="tabBorder"></div>
    </div>
    <div id='content'>
        <p class="basic-txt" [style.display]="display('info')" [innerHTML]='detail.info'></p>
        <p class="basic-txt" [style.display]="display('risk')"  [innerHTML]='detail.risk'></p>
        <p class="basic-txt" [style.display]="display('doza')"  [innerHTML]='detail.doza'></p>
        <p class="basic-txt" [style.display]="display('efekt')"  [innerHTML]='detail.efekt'></p>
    </div>
    <div id='moreInfo'>
        <a [href]="detail.link">
          <img id="vecICO" src='assets/img/more.svg' oncontextmenu="return false;"/>
        </a>
    </div>
  `,
  styles: [
    '#content { top: 140px; }',
    '#moreInfo { opacity: 0; position: fixed; bottom: 100px; right: 0px; background: linear-gradient(to right, rgb(238, 213, 134, 0.5), rgb(238, 213, 134, 0.85)); }'
  ]
})
export class DrogeViewComponent implements OnInit {

  detail: any = {};
  openedTab: string;
  tabGroupBorderEl: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.openedTab = 'info';
    this.tabGroupBorderEl = document.getElementById('tabBorder');
    this.fillData();
    this.ds.onStatusChange(online => {
      if (!Object.keys(this.detail).length && online) { this.fillData(); }
    });
  }

  fillData() {
    this.route.url.subscribe(segs =>
      this.ds.getData('droge', +segs[0].toString()).subscribe(res =>
        this.detail = res[0])
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
