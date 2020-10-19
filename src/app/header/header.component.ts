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
    'div {background-color: #262626; padding: 5px; letter-spacing: 1.4em; height: 64px; line-height: 64px; box-sizing: border-box}',
    'p {margin: 0; text-align: center; color: white; font-size: 2em;}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
