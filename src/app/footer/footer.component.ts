import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div>
    <p routerLink="/opozorila">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div {background-color: black; padding: 5px;}',
    'p {margin: 0; text-align: center; color: white; }'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
