import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
  <div id="footer">
    <p *ngIf="showKlic" ><a href="tel:112">KLIC 112</a></p>
    <p *ngIf="!showKlic" routerLink="/opozorila" onclick="this.blur();">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div {position: fixed; bottom: 0px; background-color: #262626; height: 61px; width: 100%; line-height: 61px; box-sizing: border-box}',
    'p {margin: 0; text-align: center; color: white; }',
    'a { color: inherit; text-align: inherit; text-decoration: inherit; }'
  ]
})
export class FooterComponent implements OnInit {

  showKlic: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event['url']){
        this.showKlic = event['url'] === '/emergency';
      }
  });

  }

}
