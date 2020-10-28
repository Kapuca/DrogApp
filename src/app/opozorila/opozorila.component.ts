import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila' class='container'>
        <div id="opozorilo">
          <div id="naslov">
				<a [href]='opozorilo.link'>
              <img id="opozoriloICO" src='assets/img/more.svg'/>
            </a>
            <h2 id="naslovOpozorila">{{opozorilo.title | uppercase}}</h2>
          </div>
          <p>{{opozorilo.datetime}}</p>
          <p class="basic-txt" [innerHTML]='opozorilo.msg'></p>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { display: flex; }',
    '#opozoriloICO { height: 3.5em; float: right; }',
    '#naslovOpozorila { width: 87vw; }',
    '#opozorilo { padding-left: 15px; padding-right: 15px; }',
  ]
})
export class OpozorilaComponent implements OnInit {

  opozorila: any[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
  }

}
