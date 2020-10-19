import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div>
    <p routerLink="/opozorila" onclick="this.blur();">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div {position: fixed; bottom: 0px; background-color: #262626; padding: 5px; height: 60px; width: 100%; line-height: 60px; box-sizing: border-box}',
    'p {margin: 0; text-align: center; color: white; }',
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
