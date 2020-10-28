import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div class="app-list" id='content'>
      <div class='item' *ngFor='let item of items' [routerLink]='item.id'>
        {{ item.title | uppercase }}
      </div>
    </div>
  </div>
  `,
  styles: [
    '.item:nth-child(2n+1) { background: #f4f4f4; }',
    '.item {padding: 0px 10px 0px 10px; line-height: 2;}',
  ]
})
export class ListComponent implements OnInit {

  items: any;
  baseUrl: string;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url = this.route.url.pipe(map(segments => segments.join(' / ')));
    url.subscribe(u => {
      this.baseUrl = u;
    });
    this.ds.getData(this.baseUrl).subscribe(data => {
      this.items = data;
    });
  }

}
