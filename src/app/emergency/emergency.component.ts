import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emergency',
  template: `
    <div id='main' class='secondPage'>
      <app-nav-header></app-nav-header>
      <div id='content' class='different'>
        <div *ngIf='choice === undefined'>
          <p class="basic-txt" [innerHTML]='emergency.main'></p>
          <div id="choice-bar">
			      <button id="da" class="izbira" [routerLink]="['./']" [queryParams]="{choice: true}" onclick="this.blur();">DA</button>
            <div class="vertical"></div>
		      	<button id="ne" class="izbira" [routerLink]="['./']" [queryParams]="{choice: false}" onclick="this.blur();">NE</button>
          </div>
          <img id="mergency1Slika" src="assets/img/emergency_1.svg" alt="PIC:EMERGENCY1" oncontextmenu="return false;"/>
        </div>
        <div *ngIf='choice === "false"'>
          <p class="basic-txt" [innerHTML]='emergency.ne'></p>
          <button class="choice-bar-back" [routerLink]="['./']" [queryParams]="{choice: null}" onclick="this.blur();"><span>sprememba stanja</span></button>
		  <ul class="emergencyNeSlike">
			<li><img id="mergency2Slika" src="assets/img/emergency_2.svg" alt="PIC:EMERGENCY2" oncontextmenu="return false;"/></li>
			<li><img id="mergency3Slika" src="assets/img/emergency_3.svg" alt="PIC:EMERGENCY3" oncontextmenu="return false;"/></li>
		  </ul>
        </div>
        <div *ngIf='choice === "true"' id="emergencyDa">
          <p class="basic-txt" [innerHTML]='emergency.da'></p>
          <button class="choice-bar-back" [routerLink]="['./']" [queryParams]="{choice: null}" onclick="this.blur();"><span>sprememba stanja</span></button>
          <img id="mergency4Slika" src="assets/img/emergency_4.svg" alt="PIC:EMERGENCY4" oncontextmenu="return false;"/>
        </div>
      </div>
      <app-conn-status></app-conn-status>
    </div>
  `,
  styles: [
    '#choice-bar { margin: 20px 0px 20px 0px; display: flex; width: 100%; justify-content: space-around; background: #f4f4f4; height: 45px; font-size: 20px; padding-top: calc(45px/2 - 5px); }',
    '.choice-bar-back { z-index: 2; position: fixed; top: 38vh; right: 0px; width: 37px; height: max-content; cursor: pointer; background: repeating-linear-gradient(45deg, #d40202bd, #d40202bd 10px, #ff0000a1 10px, #ff0000a1 20px); }',
    '.choice-bar-back > span { padding: 7px 0px 7px 0px; writing-mode: vertical-rl; text-orientation: upright; text-transform: uppercase; font-size: 1.05em; color: white; font-family: "gotham_mediumregular"; }',
    'img { object-fit: scale-down; width: 95%; height: auto; padding: 15px 0px 0px 0px; }',
    '.emergencyNeSlike > li { width: 100%; transform:rotateX(180deg); }',
    '#mergency2Slika { margin-top: 10%; }',
    '#mergency3Slika { height: 47vh; margin-top: 1%; }',
    '#mergency1Slika, #mergency4Slika { margin: 0px 2.5%; }',
    '.izbira { font-size: 1.4rem; font-weight: 650; cursor: pointer; width: calc(50vw - 6px); height: 61.5px; top: -17px; position: relative; background-color: #00000000; border: none; }',
    // 'p.basic-txt { padding: 20px 36px 20px 20px; }',
    'app-conn-status {position: fixed; bottom: 61px; width: 100%; height: 40px; }',
  ]
})
export class EmergencyComponent implements OnInit {

  emergency = { main: '', da: '', ne: '' };
  choice: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fillData();
    this.ds.onStatusChange( online => {
      if (!this.emergency.main && online) { this.fillData(); }
    });
    this.route.queryParams.subscribe(data => this.choice = data.choice);
  }

  fillData() {
    this.ds.getData('emergency').subscribe(
      data => this.emergency = data[0]
    );
  }
}
