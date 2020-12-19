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
    <app-conn-status></app-conn-status>
  </div>
  `,
  styles: [
    '.kittyBlock > p { text-align: center; content-align: center; }',
    '.kittyBlock > img {display: block; margin: auto;}',
    'app-conn-status {position: fixed; bottom: 61px; width: 100%; height: 40px; }',
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
