import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div id="footer">
    <p routerLink="/opozorila" onclick="this.blur();">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div {position: fixed; bottom: 0px; background-color: #262626; height: 61px; width: 100%; line-height: 61px; box-sizing: border-box}',
    'p {margin: 0; text-align: center; color: white; }',
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
