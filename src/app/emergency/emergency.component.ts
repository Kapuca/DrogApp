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
            <div id="da" [routerLink]="['./']" [queryParams]="{choice: true}">DA</div>
				<div class="vertical"></div>
            <div id="ne" [routerLink]="['./']" [queryParams]="{choice: false}">NE</div>
          </div>
          <img src="assets/img/emergency_1.svg"/>
        </div>
        <div *ngIf='choice === "true"'>
          {{ emergency.da }}
          <img src="assets/img/emergency_2.svg"/>
          <img src="assets/img/emergency_3.svg"/>
        </div>
        <div *ngIf='choice == "false"'>
          {{ emergency.ne }}
          <img src="assets/img/emergency_4.svg"/>
        </div>
        </div>
    </div>
  `,
  styles: [
    '#choice-bar { margin: 20px 0px 20px 0px; display: flex; width: 100%; justify-content: space-around; background: #f4f4f4; height: 45px; font-size: 20px; padding-top: calc(45px/2 - 5px); }',
    '#da { color: #31656d; } #ne { color: #dd6c56; }',
    'img { object-fit: scale-down; width: 100%; }',
    '#content { position: absolute; top: calc(64px + 45px); }',
    '.vertical { position: absolute; border-left: 6px solid green; height: calc(45px/2 + 45px); }'
  ]
})
export class EmergencyComponent implements OnInit {

  emergency: any;
  choice: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getData('emergency').subscribe(
      data => this.emergency = data[0],
      error => {
        console.error(error);
        this.emergency = {main: 'Cant get DB'};
        this.emergency.da = this.emergency.main;
        this.emergency.ne = this.emergency.main;
      });
    this.route.queryParams.subscribe(data => this.choice = data.choice);
    console.log(this.choice);
  }

}
