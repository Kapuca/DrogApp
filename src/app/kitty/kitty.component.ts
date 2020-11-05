import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-kitty',
  template: `
    <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <p> A kitty a day keeps the drugz away</p>
      <img [src]='source' />
    </div>
  </div>
  `,
  styles: [
  ]
})
export class KittyComponent implements OnInit {

  source: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getKitty().subscribe(url => this.source = url);
  }

}
