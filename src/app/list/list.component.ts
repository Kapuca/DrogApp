import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
    <app-nav-header></app-nav-header>
    <div *ngFor='let item of items' [routerLink]='item.id'>
      {{ item.title | uppercase }}
    </div>
  `,
  styles: [
    'div:nth-child(2n+1) { background: #f4f4f4; }'
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
