import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-footer',
  template: `
  <div id="footer">
    <p *ngIf="showKlic" ><a href="tel:112" class="onDark">KLIC 112</a></p>
    <p *ngIf="!showKlic" [routerLink]="['/opozorila']" [queryParams]="{show: 'last'}" (click)='notifHook()' onclick='this.blur()'>ZADNJE OPOZORILO</p>
  </div>
  `,
  styles: [
    '#footer { position: fixed; bottom: 0px; background-color: #262626; height: 61px; width: 100vw; line-height: 61px; box-sizing: border-box; user-select: none; }',
    'p { margin: 0; text-align: center; color: white; font-weight: 600; letter-spacing: 0.25rem; font-size: 0.8rem; }'
  ]
})
export class FooterComponent implements OnInit {

  showKlic: boolean;
  onOpozorila: boolean;

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RouterEvent){
        this.showKlic = event.url.includes('/emergency');
        this.onOpozorila = event.url.includes('/opozorila');
      }
  });

  }

  notifHook(){
    if (this.onOpozorila) {
      window.scrollTo({behavior: 'smooth', top: 0});
    }
  }

}
