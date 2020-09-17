import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-droge',
  template: `
    <div id='main'>
      <app-nav-header></app-nav-header>
      <div class='content'>
        <div class="tab">
          <button class="tablinks" (click)="open('info')">{{ 'info' | uppercase }}</button>
          <button class="tablinks" (click)="open('efekt')">{{ 'učinek' | uppercase }}</button>
          <button class="tablinks" (click)="open('doza')">{{ 'odmerek' | uppercase }}</button>
          <button class="tablinks" (click)="open('risk')">{{ 'tveganja' | uppercase }}</button>
        </div>
        <p [style.display]="display('info')">
          {{ droga.info }}
        </p>
        <p [style.display]="display('risk')">
          {{ droga.risk }}
        </p>
        <p [style.display]="display('doza')">
          {{ droga.doza }}
        </p>
        <p [style.display]="display('efekt')">
          {{ droga.efekt }}
        </p>
      </div>
    </div>
  `,
  styles: [
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
