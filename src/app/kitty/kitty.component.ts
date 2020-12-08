import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-kitty',
  template: `
    <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content' class="kittyBlock">
      <p> A kitty a day keeps the drugz away</p>
      <img [src]='source' (click)='summonKitty()' />
    </div>
    <app-conn-status *ngIf='!source' ></app-conn-status>
  </div>
  `,
  styles: [
    '.kittyBlock > p { text-align: center; content-align: center; }',
    '.kittyBlock > img { position: fixed; object-fit: contain; top: 50%; left: 50%; transform: translate(-50%, -50%); }',
    'app-conn-status {position: fixed; bottom: 75px; }',
  ]
})
export class KittyComponent implements OnInit {

  source: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.summonKitty();
    this.ds.onStatusChange(online => {
      if (!this.source && online) { this.summonKitty(); }
    });
  }

  summonKitty(): void{
    this.ds.getKitty().subscribe(url => this.source = url);
  }

}
