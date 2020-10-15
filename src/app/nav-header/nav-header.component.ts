import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../general/general.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-nav-header',
  template: `
    <div [routerLink]="['../']" [style.background-color]='color()'>
      <img [src]="['assets/img/home-' + baseSeg + '.png']"/>
      <span>{{ fullSeg | uppercase }}</span>
    </div>
  `,
  styles: [
    'img { width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin:8px 15px; }',
    'div { height: 45px; line-height: 45px; }',
    'span { color: white;}',
  ]
})
export class NavHeaderComponent implements OnInit {

  baseSeg: string;
  fullSeg: any;

  constructor(private route: ActivatedRoute, private gs: GeneralService, private ds: DataService) { }

  ngOnInit(): void {
    this.fullSeg = 'wtf';
    this.route.url.subscribe(segs => {
      this.baseSeg = segs[0].toString();
      if (segs[1] !== undefined){
        this.ds.getData(this.baseSeg, +segs[1].toString()).subscribe(s =>
          this.fullSeg = [this.baseSeg, s[0].title].join(' / '));
      }else{
        this.route.url.subscribe(s =>
          this.fullSeg = s[0].toString());
      }
    });
  }

  color(){ return this.gs.getColor(this.baseSeg); }

}
