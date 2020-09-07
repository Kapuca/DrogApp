import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div>
    <a routerLink="/" ><p>
      DROG<strong>APP</strong>
    </p></a>
  </div>
  `,
  styles: ['div {background-color: black; padding: 5px;} p {margin: 0; text-align: center;}']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
