import { Component, OnInit } from '@angular/core';
import { RouterEvent, Router } from '@angular/router';
import { DataService } from '../data/data.service';
//import { animation, trigger, animateChild, group, transition, animate, state, style, query } from '@angular/animations';

@Component({
  selector: 'app-footer',
  template: `
  <div id="footer"> <!-- [@doNotMoveMe]="stay" -->
    <p *ngIf="showKlic" ><a href="tel:112" class="onDark">KLIC 112</a></p>
    <p *ngIf="!showKlic" [routerLink]="['/opozorila']" [queryParams]="{show: last}" (click)='notifHook()'>
      ZADNJE OPOZORILO
    </p>
  </div>
  `,
  styles: [
    'div { position: fixed; bottom: 0px; background-color: #262626; height: 61px; width: 100%; line-height: 61px; box-sizing: border-box; }',
    'p { margin: 0; text-align: center; color: white; font-weight: 600; letter-spacing: 0.25rem; font-size: 0.8rem; }',
  ],
  /* animations: [
    trigger('doNotMoveMe', [
      state('stay', style({
        position: 'fixed',
		bottom: '0px',
		backgroundColor: '#262626',
		height: '61px',
		width: '100%',
		lineHeight: '61px',
		boxSizing: 'border-box'
      })),
       state('there', style({
        position: 'fixed',
		bottom: '0px',
		backgroundColor: '#262626',
		height: '61px',
		width: '100%',
		lineHeight: '61px',
		boxSizing: 'border-box'
      })),
      transition('stay => *', [
        animate('0.3s')
      ])
    ])
  ] */
})
export class FooterComponent implements OnInit {

  showKlic: boolean;
  last: any;

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RouterEvent){
        this.showKlic = event.url.includes('/emergency');
      }
      this.ds.getData('opozorila').subscribe(res => {
        this.last =  res[0].id;
      });
  });

  }

  notifHook(){
    this.ds.getSubscribed();
  }

}
