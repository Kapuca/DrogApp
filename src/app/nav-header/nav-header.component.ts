import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GeneralService } from '../general/general.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-nav-header',
  template: `
    <div id="nav-header" [routerLink]='linkSeg' [style.background-color]='colorStr'>
	  <div class="backButton">&lt;</div>
      <img [src]='linkIcon'/>
      <span>{{ titleSeg | uppercase }}</span>
    </div>
  `,
  styles: [
    'img { color: white; width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin: 8px 5px 8px 28px; }',
    'div { position: fixed; top: 64px; width: 100%; height: 45px; line-height: 45px; z-index: 420; }',
    'span { color: white;}',
    '.backButton { position: absolute; top: auto; color: white; font-size: 1.8em; left: 8px; margin-top: -0.2rem; }',
  ]
})
export class NavHeaderComponent implements OnInit {

  baseSeg: string;
  colorStr: string;
  titleSeg: string;
  linkSeg: string;
  linkIcon: string;

  constructor(private gs: GeneralService, private ds: DataService, private loc: Location) { }

  ngOnInit(): void {
    this.titleSeg = '';
    this.makeSegs(this.loc.path());
	this.colorStr = this.color();
	this.linkIcon = this.src();
  }

  color(){ return this.gs.getColor(this.baseSeg); }

  src(): string{
    return 'assets/img/home-' + this.baseSeg + '.svg';
  }

  makeSegs(url: string){
    const segs = url.split('/');
    this.baseSeg = segs[1].split('?')[0];

    if (segs[2] !== undefined){
      this.ds.getData(this.baseSeg, +segs[2].split('?')[0]).subscribe(s =>
        this.titleSeg = s[0].title
      );
    }else{
      this.titleSeg = this.baseSeg;
    }
    segs.pop();
    this.linkSeg = segs.join('/');
  }
}
