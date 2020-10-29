import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emergency',
  template: `
    <div id='main'>
      <app-nav-header></app-nav-header>
      <div id='content' class='different'>
        <div *ngIf='choice === undefined'>
          <p class="basic-txt" [innerHTML]='emergency.main'></p>
          <div id="choice-bar">
            <div>
					<button id="da" class="izbira" [routerLink]="['./']" [queryParams]="{choice: true}" onclick="this.blur();">DA</button>
				</div>
            <div class="vertical"></div>
            <div>
					<button id="ne" class="izbira" [routerLink]="['./']" [queryParams]="{choice: false}" onclick="this.blur();">NE</button>
				</div>
          </div>
          <img src="assets/img/emergency_1.svg"/>
        </div>
        <div *ngIf='choice === "true"'>
          <p class="basic-txt" [innerHTML]='emergency.da'></p>
          <img src="assets/img/emergency_2.svg"/>
          <img src="assets/img/emergency_3.svg"/>
        </div>
        <div *ngIf='choice === "false"'>
          <p class="basic-txt" [innerHTML]='emergency.ne'></p>
          <img src="assets/img/emergency_4.svg"/>
        </div>
        </div>
    </div>
  `,
  styles: [
    '#choice-bar { margin: 20px 0px 20px 0px; display: flex; width: 100%; justify-content: space-around; background: #f4f4f4; height: 45px; font-size: 20px; padding-top: calc(45px/2 - 5px); }',
    'img { object-fit: scale-down; width: 90%; padding-left: 5%; height: fit-content; }',
    '.izbira { font-size: 1.4rem; font-weight: 650; cursor: pointer; width: calc(50vw - 6px); height: 61.5px; top: -17px; position: relative; background-color: #00000000; border: none; }'
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
