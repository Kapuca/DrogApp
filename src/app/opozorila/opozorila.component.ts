import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main' class='secondPage'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila; index as i' class='container' #container (click)='closeFirst(); focusOn(i);'>
        <h2 class="naslov">{{opozorilo.title | uppercase}}</h2>
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
    '.container { padding: 10px 15px; cursor: pointer; scroll-padding-top: 109px; }',
    '.naslov { width: 100%; }',
    '.details { display: initial}',
    '.opozoriloICO { height: 3.5em; display: block; width: 100%; }',
  ]
})
export class OpozorilaComponent implements OnInit {

  opozorila: any[];
  @ViewChildren('container') containers: QueryList<ElementRef>;
  show: boolean[];
  opozorilaListBox: any;
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
    this.show = [];
	this.opozorilaListBox = document.getElementById("content").getBoundingClientRect();
    this.route.queryParams.subscribe(data => {
      this.show.fill(false);
      this.show[+data.show] = true;
    });
  }

  focusOn(idx: number): void {
    const tmp = this.containers.toArray()[idx].nativeElement;
	
    if (this.show[idx]) { this.show[idx] = false; }
    else { this.show[idx] = true; }
	
	console.log(this.opozorilaListBox);
 	var box = tmp.getBoundingClientRect();
	console.log(box)
/*    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(Math.round(box.top +  scrollTop - clientTop));
	tmp.scrollTo({behavior: 'smooth', top:  Math.round(box.top +  scrollTop)-120}); */
	tmp.focus();
  }
  
  closeFirst(): void {
	this.show.fill(false);
  }

}
