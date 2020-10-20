import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div>
    <p routerLink="/" onclick="this.blur();">
      DROG<strong>APP</strong>
    </p>
  </div>
  `,
  styles: [
    'div {position: fixed; top: 0px; width: 100%; background-color: #262626; padding: 5px; letter-spacing: 1.4em; height: 64px; line-height: 64px; box-sizing: border-box; z-index: 420; }',
    'p {margin: 0; text-align: center; color: white; font-size: 2em;}'
    // ,'p::active {border: none !important;}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
