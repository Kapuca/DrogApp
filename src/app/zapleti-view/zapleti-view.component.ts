import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-zapleti-view',
  template: `
    <div class="tab" id="tabZapleti">
      <button class="tablinksZapleti" id="tabInfo" (click)="open('info', $event)" onclick="this.blur();">{{ 'info' | uppercase }}</button>
      <button class="tablinksZapleti" id="tabZnaki" (click)="open('znaki', $event)" onclick="this.blur();">{{ 'znaki' | uppercase }}</button>
      <button class="tablinksZapleti" id="tabUkrepi" (click)="open('ukrepi', $event)" onclick="this.blur();">{{ 'ukrepi' | uppercase }}</button>
		<div id="tabBorder"></div>
    </div>
    <div id='content'>
      <p class="basic-txt" [style.display]="display('info')" [innerHTML]='zaplet.info'></p>
      <p class="basic-txt" [style.display]="display('znaki')" [innerHTML]='zaplet.znaki'></p>
      <p class="basic-txt" [style.display]="display('ukrepi')" [innerHTML]='zaplet.ukrepi'></p>
    </div>
    <app-conn-status *ngIf="(zaplet | json) == '{}'" ></app-conn-status>
  `,
  styles: [
    '#content { top: 140px; }',
    'app-conn-status { position: fixed; bottom: 100px }'
  ]
})
export class ZapletiViewComponent implements OnInit {

  zaplet: any = {};
  openedTab: string;
  tabGroupBorderEl: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.openedTab = 'info';
    this.tabGroupBorderEl = document.getElementById('tabBorder');
    this.fillData();
    this.ds.onStatusChange(online => {
      if (!Object.keys(this.zaplet).length && online) { this.fillData(); }
    });
  }

  fillData() {
    this.route.url.subscribe(segs =>
      this.ds.getData('zapleti', +segs[0].toString()).subscribe(res =>
        this.zaplet = res[0])
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
