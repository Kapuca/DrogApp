import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-zapleti',
  template: `
    <app-nav-header></app-nav-header>
    <div class="tab">
      <button class="tablinks" (click)="open('info')">{{ 'info' | uppercase }}</button>
      <button class="tablinks" (click)="open('znaki')">{{ 'znaki' | uppercase }}</button>
      <button class="tablinks" (click)="open('ukrepi')">{{ 'ukrepi' | uppercase }}</button>
    </div>
    <p [style.display]="display('info')">
      {{ zaplet.info }}
    </p>
    <p [style.display]="display('znaki')">
      {{ zaplet.znaki }}
    </p>
    <p [style.display]="display('ukrepi')">
      {{ zaplet.ukrepi }}
    </p>
  `,
  styles: [
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
