import { Component, ElementRef, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila' class='container' #container (click)='focusOn(opozorilo.id)' [id]='"container-" + opozorilo.id'>
        <h2 class="naslov">{{opozorilo.title | uppercase}}</h2>
        <p>{{ opozorilo.datetime }}</p>
        <div class='details' *ngIf='show === opozorilo.id'>
          <p class="basic-txt" [innerHTML]='opozorilo.msg'></p>
          <a [href]='opozorilo.link'><img class="opozoriloICO" src='assets/img/more.svg'/></a>
        <div>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { padding: 10px 15px; cursor: pointer; scroll-padding-top: 109px; }',
    '.naslov { width: 100%; }',
    '.details { display: initial}',
    '.opozoriloICO { height: 3.5em; display: block; width: 100%; }',
	'#content { animation: 0.6s ease-out 0s 1 slideFromUp; }'
  ]
})
export class OpozorilaComponent implements OnInit, OnDestroy{

  opozorila: any[];
  @ViewChildren('container') containers: QueryList<ElementRef>;
  show: number;
  opozorilaListBox: any;
  lastOpenedTextHeight: number;

  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
    this.opozorilaListBox = document.getElementById('content');
    this.lastOpenedTextHeight = 0;
    this.route.queryParams.subscribe(data => {
      this.show = data.show;
    });
    this.ds.getSubscribed();
  }

  ngOnDestroy(): void {
    window.scrollTo({top: 0});
  }

  focusOn(idx: number): void {
    if (this.show !== idx) {
      const tmp = this.containers.toArray().filter(el => el.nativeElement.id === ('container-' + idx))[0].nativeElement;
      const box = tmp.getBoundingClientRect();

      if (this.show !== undefined && this.show < idx) {
      // const tmpPrevious = this.containers.toArray().filter(el => el.nativeElement.id === ('container-' + this.show))[0].nativeElement.getBoundingClientRect();
      window.scrollTo({behavior: 'smooth', top: window.scrollY - (109 - box.top)});
      } else {
        if (document.getElementsByClassName('basic-txt')[0]) {
          this.lastOpenedTextHeight = document.getElementsByClassName('basic-txt')[0].getBoundingClientRect().height + 72;
        }
        window.scrollTo({behavior: 'smooth', top: window.scrollY + (box.top - 109 - this.lastOpenedTextHeight)});
      }

      this.show = idx;
      this.ds.getSubscribed();
    }
  }

}
