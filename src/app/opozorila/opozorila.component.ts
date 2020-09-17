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
          <h2>{{opozorilo.title | uppercase}}</h2>
          <p>{{opozorilo.datetime}}</p>
          <p>{{opozorilo.msg}}</p>
        </div>
        <a [href]='opozorilo.link'>
          <img src='assets/img/more.png'/>
        </a>

      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { display: flex; }'
  ]
})
export class OpozorilaComponent implements OnInit {

  opozorila: any[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getData('opozorila').subscribe(data => this.opozorila = data);
  }

}
