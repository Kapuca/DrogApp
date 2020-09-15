import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  template: `
    <app-nav-header></app-nav-header>
    <p *ngFor='let item of items' [routerLink]='item.id'>
      {{ item.title | uppercase }}
    </p>
  `,
  styles: [
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
