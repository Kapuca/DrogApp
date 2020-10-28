import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-nav-header',
  template: `
    <div id="nav-header" [routerLink]="['../']" [style.background-color]='color()'>
		<div class="backButton">&lt;</div>
      <img [src]="['assets/img/home-' + baseSeg + '.svg']"/>
      <span>{{ fullSeg | uppercase }}</span>
    </div>
  `,
  styles: [
    'img { color: white; width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin: 8px 5px 8px 28px; }',
    'div { position: fixed; top: 64px; width: 100%; height: 45px; line-height: 45px; z-index: 420; }',
    'span { color: white;}',
    '.backButton { color: white; font-size: 1.8em; left: 8px; margin-top: -0.2rem; }',
  ]
})
export class NavHeaderComponent implements OnInit {

  baseSeg: string;
  fullSeg: any;

  constructor(private route: ActivatedRoute, private gs: GeneralService, private ds: DataService) { }

  ngOnInit(): void {
    this.fullSeg = '';
    this.route.url.subscribe(segs => {
      this.baseSeg = segs[0].toString();
      if (segs[1] !== undefined){
        this.ds.getData(this.baseSeg, +segs[1].toString()).subscribe(s =>
          // this.fullSeg = [this.baseSeg, s[0].title].join(' / ')
          this.fullSeg = s[0].title
        );
      }else{
        this.fullSeg = segs[0].toString();
      }
    });
  }

  color(){ return this.gs.getColor(this.baseSeg); }

}
