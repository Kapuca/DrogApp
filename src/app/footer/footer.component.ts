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
    'div {background-color: #262626; padding: 5px; height: 60px; line-height: 60px}',
    'p {margin: 0; text-align: center; color: white; }'
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
