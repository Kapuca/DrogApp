import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general/general.service';

@Component({
  selector: 'app-main',
  template: `
    <div id='main'>
      <div class='tile' *ngFor='let title of titles()' [routerLink]="['/', title]" [style.background-color]='color(title)'>
        <img [src]="['assets/img/home-' + title + '.svg']"/>
		  <p>{{title}}</p>
      </div>
    </div>
  `,
  styles: [
    '#main { position: absolute; top: 64px; display: grid; grid-template-columns: 50vw 50vw; grid-template-rows: repeat(3, 33.33%); grid-gap: 0px;}',
    '.tile { text-align: center; padding: 5vh 12px; }',
    'img { object-fit: scale-down; width: 100%; max-height: 80%; margin-top: -5px; display: block; }',
	 'p { font-family: "brandon_grotesque_regularRg"; color: #fff; text-transform: uppercase; font-weight: 600; letter-spacing: 0.15rem; }'
  ]
})
export class MainComponent implements OnInit {


  constructor(private gs: GeneralService) { }

  ngOnInit(): void {
  }

  titles(){ return this.gs.getTitles(); }
  color(title){ return this.gs.getColor(title); }

}
