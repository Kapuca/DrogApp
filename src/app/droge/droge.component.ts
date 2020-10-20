import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-droge',
  template: `
    <div id='main'>
      <app-nav-header></app-nav-header>
		<div class="tab">
         <button class="tablinks" (click)="open('info')">{{ 'info' | uppercase }}</button>
         <button class="tablinks" (click)="open('efekt')">{{ 'učinek' | uppercase }}</button>
         <button class="tablinks" (click)="open('doza')">{{ 'odmerek' | uppercase }}</button>
			<button class="tablinks" (click)="open('risk')">{{ 'tveganja' | uppercase }}</button>
      </div>
      <div class='content'>
        <p class="basic-txt" [style.display]="display('info')" [innerHTML]='droga.info'></p>
        <p class="basic-txt" [style.display]="display('risk')"  [innerHTML]='droga.risk'></p>
        <p class="basic-txt" [style.display]="display('doza')"  [innerHTML]='droga.doza'></p>
        <p class="basic-txt" [style.display]="display('efekt')"  [innerHTML]='droga.efekt'></p>
      </div>
    </div>
  `,
  styles: [
		'.content { position: absolute; top: calc(64px + 45px + 10px); width: 100%; z-index: 0; }'
  ]
})
export class DrogeComponent implements OnInit {

  droga: any;
  openedTab: string;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.openedTab = 'info';
    this.route.url.subscribe(segs =>
      this.ds.getData(segs[0].toString(), +segs[1].toString()).subscribe(res =>
        this.droga = res[0])
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
