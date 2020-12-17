import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general/general.service';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-main',
  template: `
    <div class='firstPage' id='main'>
      <div class='tile' *ngFor='let title of titles()' [routerLink]="['/', title]" [style.background-color]='color(title)'>
        <img [src]="['assets/img/home-' + title + '.svg']" [alt]="['PIC:' + title]" oncontextmenu="return false;"/>
		  <p>{{ title }}</p>
      </div>
    </div>
  `,
  styles: [
    '#main { background-color: #262626; position: fixed; top: 64px; display: grid; grid-template-columns: 50vw 50vw; grid-template-rows: repeat(6, 33.33%); grid-gap: 0px; overflow-y: auto; overflow-x: hidden; user-select: none; }',
    '.tile { text-align: center; padding: 5px 12px; content-align: center; overflow: hidden }',
    'img { object-fit: scale-down; max-width: 100%; height: 45%; display: block; margin: auto; position: relative; top: 22.5%; }',
    'p { color: #fff; text-transform: uppercase; font-weight: 600; letter-spacing: 0.15rem; font-size: small; position: relative; top: 35%; }'
  ],
  animations: [
    slideInAnimation
  ]
})
export class MainComponent implements OnInit {

  constructor(private gs: GeneralService) { }

  ngOnInit(): void { }

  titles(){ return this.gs.getTitles(); }
  color(title){ return this.gs.getColor(title); }

}
