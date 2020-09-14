import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralService } from '../general/general.service';

@Component({
  selector: 'app-nav-header',
  template: `
    <div [routerLink]="['../']" [style.background-color]='color()'>
      <img [src]="['assets/img/home-' + baseUrl + '.png']"/>
      <span>{{ url | async | uppercase}}</span>
    </div>
  `,
  styles: [
    'img { width:28px; height:28px; float:left; background-size: 28px 28px; background-repeat: no-repeat; margin:8px 15px; }',
    'div { height: 45px }',
  ]
})
export class NavHeaderComponent implements OnInit {

  url: Observable<string>;
  baseUrl: string;

  constructor(private route: ActivatedRoute, private gs: GeneralService) { }

  ngOnInit(): void {
    this.url = this.route.url.pipe(map(segments => segments.join(' / ')));
    this.url.subscribe(u => {
      this.baseUrl = u;
      return u;
    });
//    console.log('url:', this.url, this.baseUrl);
  }

  color(){ return this.gs.getColor(this.baseUrl); }

}
