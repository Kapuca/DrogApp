import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  template: `
    <div id='main' class='secondPage'>
      <app-nav-header></app-nav-header>
      <router-outlet (activate)='onActivate($event)' (deactivate)='onDeactivate($event)'></router-outlet>
      <app-list-view *ngIf="listing" [items]='data'></app-list-view>
    </div>
  `,
  styles: [
  ]
})
export class ListComponent implements OnInit, OnDestroy {

  droga: any;
  listing = true;
  data: any[];

  constructor( private ds: DataService, private loc: Location) { }

  ngOnInit(): void {
    this.ds.getData(this.loc.path().split('/')[1]).subscribe(data => this.data = data);
  }

  ngOnDestroy(): void {
    window.scrollTo({top: 0});
  }

  onActivate(e: Event): void {
    this.listing = false;
  }
  onDeactivate(e: Event): void {
    this.listing = true;
  }

}
