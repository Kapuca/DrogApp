import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <a routerLink="/" ><p>
      DROGAPP
    </p></a>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
