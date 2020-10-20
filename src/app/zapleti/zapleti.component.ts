import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-zapleti',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div class="tab">
      <button class="tablinks" (click)="open('info')">{{ 'info' | uppercase }}</button>
      <button class="tablinks" (click)="open('znaki')">{{ 'znaki' | uppercase }}</button>
      <button class="tablinks" (click)="open('ukrepi')">{{ 'ukrepi' | uppercase }}</button>
    </div>
    <div id='content'>
      <p class="basic-txt" [style.display]="display('info')" [innerHTML]='zaplet.info'></p>
      <p class="basic-txt" [style.display]="display('znaki')" [innerHTML]='zaplet.znaki'></p>
      <p class="basic-txt" [style.display]="display('ukrepi')" [innerHTML]='zaplet.ukrepi'></p>
    </div>
  </div>
  `,
  styles: [
		'#content { position: absolute; top: calc(64px + 45px); }'
  ]
})
export class ZapletiComponent implements OnInit {

  zaplet: any;
  openedTab: string;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.openedTab = 'info';
    this.route.url.subscribe(segs =>
      this.ds.getData(segs[0].toString(), +segs[1].toString()).subscribe(res =>
        this.zaplet = res[0])
    );
  }

  open(attr: string): void{
    this.openedTab = attr;
  }

  display(attr: string): string{
    if (attr === this.openedTab) { return 'block'; }
    return 'none';
  }

}
