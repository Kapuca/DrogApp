import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div id='main'>
      <div class='tile' *ngFor='let tile of tiles' [routerLink]="['/', tile]">
        <img [src]="['assets/img/home-' + tile + '-txt.png']"/>
      </div>
    </div>
  `,
  styles: [
    '#main { display: grid;   grid-template-columns: auto auto; max-width: 100%;  background-color: #eed586; }',
    '.tile { text-align: center;}',
    'img { object-fit: scale-down; max-width: 100%;}',
  ]
})
export class MainComponent implements OnInit {

  tiles = ['droge', 'nasveti', 'zapleti', 'emergency', 'info', 'opozorila'];

  constructor() { }

  ngOnInit(): void {
  }

}
