import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general/general.service';

@Component({
  selector: 'app-main',
  template: `
    <div id='main'>
      <div class='tile' *ngFor='let title of titles()' [routerLink]="['/', title]" [style.background-color]='color(title)'>
        <img [src]="['assets/img/home-' + title + '-txt.png']"/>
      </div>
    </div>
  `,
  styles: [
    '#main { display: grid;   grid-template-columns: auto auto; max-width: 100%; }',
    '.tile { text-align: center;}',
    'img { object-fit: scale-down; max-width: 100%;}',
  ]
})
export class MainComponent implements OnInit {


  constructor(private gs: GeneralService) { }

  ngOnInit(): void {
  }

  titles(){ return this.gs.getTitles(); }
  color(title){ return this.gs.getColor(title); }

}
