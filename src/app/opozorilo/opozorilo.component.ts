import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opozorilo',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <div id="opozorilo">
        <div id="naslov">
          <h2 id="naslovOpozorila">{{opozorilo.title | uppercase}}</h2>
        </div>
        <p>{{opozorilo.datetime}}</p>
        <p class="basic-txt" [innerHTML]='opozorilo.msg'></p>
        <a [href]='opozorilo.link'>
          Več na spletni strani DrpgArt <img id="opozoriloICO" src='assets/img/more.svg'/>
        </a>
      </div>
    </div>
  </div>
  `,
  styles: [
    '.container:nth-child(2n+1) { background: #f4f4f4; }',
    '.container { display: flex; }',
    '#opozoriloICO { height: 3.5em; }',
    '#naslovOpozorila { width: 87vw; }',
    '#opozorilo { padding-left: 15px; padding-right: 15px; }'
  ]
})
export class OpozoriloComponent implements OnInit {

  opozorilo: any;

  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(segs =>
    this.ds.getData('opozorila', +segs[1].toString()).subscribe(data => {
      this.opozorilo = data[0];
    }));
  }

}
