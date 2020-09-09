import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div>
    <p routerLink="/">
      DROG<strong>APP</strong>
    </p>
  </div>
  `,
  styles: [
    'div {background-color: black; padding: 5px;}',
    'p {margin: 0; text-align: center; color: white;}'
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
