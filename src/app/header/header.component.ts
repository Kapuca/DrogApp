import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div id="header">
    <p routerLink="/" onclick="this.blur();">
      DROG<span style="font-family:gotham_mediumregular; font-weight:bold">APP</span>
    </p>
  </div>
  `,
  styles: [
    'div { position: fixed; top: 0px; width: 100vw; background-color: #262626; letter-spacing: 1.4em; height: 64px; line-height: 64px; box-sizing: border-box; z-index: 420; user-select: none; }',
    'p { margin: 0; text-align: center; color: white; font-size: 2em; }'
    // ,'p::active {border: none !important;}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
