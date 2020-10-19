import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-opozorila',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div *ngFor='let opozorilo of opozorila' class='container'>
        <div>
          <div id="naslovOpozorila">
            <h2>{{opozorilo.title | uppercase}}</h2>
            <a [href]='opozorilo.link'>
              <img id="opozoriloICO" src='assets/img/more.png'/>
            </a>
          </div>
          <p>{{opozorilo.datetime}}</p>
          <p>{{opozorilo.msg}}</p>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { display: flex; }',
    '#opozoriloICO {height: 4em; float: right; margin-top: -3em; padding-right: 5px;}'
  ]
})
export class OpozorilaComponent implements OnInit {

  opozorila: any[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
  }

}
