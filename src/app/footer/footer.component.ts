import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `
  <div id="footer">
    <p *ngIf="showKlic" ><a href="tel:112" class="onDark">KLIC 112</a></p>
    <p *ngIf="!showKlic" routerLink="/opozorila" [queryParams]="{show: 0}" onclick="this.blur();">
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div {position: fixed; bottom: 0px; background-color: #262626; height: 61px; width: 100%; line-height: 61px; box-sizing: border-box}',
    'p {margin: 0; text-align: center; color: white; font-weight: 600; letter-spacing: 0.4rem; }',
  ]
})
export class FooterComponent implements OnInit {

  showKlic: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RouterEvent){
        this.showKlic = event.url.includes('/emergency');
      }
  });

  }

}
