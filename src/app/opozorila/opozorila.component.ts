import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila; index as i' class='container' #container>
        <h2 class="naslov" (click)='focusOn(i)'>{{opozorilo.title | uppercase}}</h2>
        <p>{{ opozorilo.datetime }}</p>
        <div class='details' *ngIf='show[i]'>
          <p class="basic-txt" [innerHTML]='opozorilo.msg'></p>
          <a [href]='opozorilo.link'><img class="opozoriloICO" src='assets/img/more.svg'/></a>
        <div>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { padding: 10px 15px; cursor: pointer; }',
    '.naslov { width: 100%; }',
    '.details { display: initial}',
    '.opozoriloICO { height: 3.5em; display: block; width: 100%; }',
  ]
})
export class OpozorilaComponent implements OnInit {

  opozorila: any[];
  @ViewChildren('container') containers: QueryList<ElementRef>;
  show: boolean[];
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
    this.show = [];
    this.route.queryParams.subscribe(data => {
      this.show.fill(false);
      this.show[+data.show] = true;
    });
  }

  focusOn(idx: number): void {
    const tmp = this.containers.toArray()[idx].nativeElement;
    tmp.focus();
    tmp.scrollIntoView({behavior: 'smooth', block: 'center'});
    this.show.fill(false); // auto close other textst
    if (this.show[idx]) { this.show[idx] = false; }
    else { this.show[idx] = true; }
  }

}
