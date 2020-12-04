import { Component, ElementRef, OnInit, AfterViewChecked, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila' class='container' #container (click)='focusOn(opozorilo.id);' [id]='"container-" + opozorilo.id'>
        <h2 class="naslov">{{opozorilo.title | uppercase}}</h2>
        <p>{{ opozorilo.datetime }}</p>
        <div class='details' *ngIf='show == opozorilo.id'>
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
export class OpozorilaComponent implements OnInit, AfterViewChecked, OnDestroy{

  opozorila: any[];
  @ViewChildren('container') containers: QueryList<ElementRef>;
  show: number;
  showId: number;
  opozorilaListBox: any;
  lastOpenedTextHeight: number;
  specialCase: boolean;

  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
    this.opozorilaListBox = document.getElementById('content');
    this.lastOpenedTextHeight = 0;
	this.specialCase = false;
    this.route.queryParams.subscribe(data => {
      this.show = data.show;
	  this.specialCase = true;
    });
    this.ds.getSubscribed();
  }
  
  ngAfterViewChecked(): void {
	if (this.specialCase) {
	  this.specialCase = false;
	  window.scrollTo({behavior: 'smooth', top: this.opozorilaListBox.getBoundingClientRect().height});
	}
	if (typeof this.show == 'number' && this.specialCase) {
		this.specialCase = false;
		this.showId = this.containers.toArray().indexOf(this.containers.toArray().filter(el => el.nativeElement.id === ('container-' + this.show))[0]);
	}
  }

  ngOnDestroy(): void {
    window.scrollTo({top: 0});
  }

  focusOn(idx: number): void {
    if (this.show !== idx) {
	  this.show = idx;
      const tmp = this.containers.toArray().filter(el => el.nativeElement.id === ('container-' + idx))[0];
	  const tmpId = this.containers.toArray().indexOf(tmp);
      const box = tmp.nativeElement.getBoundingClientRect();

      if (typeof this.showId == 'number' && this.showId > tmpId) {
        window.scrollTo({behavior: 'smooth', top: window.scrollY - (109 - box.top)});
      } else {
        if (document.getElementsByClassName('basic-txt')[0]) {
          this.lastOpenedTextHeight = document.getElementsByClassName('basic-txt')[0].getBoundingClientRect().height + 72;
        } 
 		else if (this.containers.toArray()[this.containers.toArray().length-1].nativeElement.attributes['id'].nodeValue.split('-')[1] == idx) {
		  this.specialCase = true;
		}
		window.scrollTo({behavior: 'smooth', top: window.scrollY + (box.top - 109 - this.lastOpenedTextHeight)});
      }
	  
	  this.showId = tmpId;
      this.ds.getSubscribed();
    }
  }

}
