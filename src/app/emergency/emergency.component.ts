import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emergency',
  template: `
    <div id='main'>
      <app-nav-header></app-nav-header>
      <div id='content'>
        <div *ngIf='choice === undefined'>
          {{ emergency.main }}
          <div id="choice-bar">
            <div id="da" [routerLink]="['./']" [queryParams]="{choice: true}">{{ "da" | uppercase }}</div>
            <div id="ne" [routerLink]="['./']" [queryParams]="{choice: false}">{{ "ne" | uppercase }}</div>
          </div>
          <img src="/assets/img/emergency_1.png"/>
        </div>
        <div *ngIf='choice === "true"'>
          {{ emergency.da }}
          <img src="/assets/img/emergency_2.png"/>
          <img src="/assets/img/emergency_3.png"/>
        </div>
        <div *ngIf='choice == "false"'>
          {{ emergency.ne }}
          <img src="/assets/img/emergency_4.png"/>
        </div>
        </div>
    </div>
  `,
  styles: [
    '#choice-bar { display: flex; width: 100%; justify-content: space-around; background: #f4f4f4; height: 45px; font-size: 20px;}',
    '#da { color: #31656d; } #ne { color: #dd6c56; }',
    'img { object-fit: scale-down;}',
  ]
})
export class EmergencyComponent implements OnInit {

  emergency: any;
  choice: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('emergency').subscribe(data => this.emergency = data[0]);
    this.route.queryParams.subscribe(data => this.choice = data.choice);
  }

}
