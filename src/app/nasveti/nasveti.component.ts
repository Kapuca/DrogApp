import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-nasveti',
  template: `
  <div id='main'>
    <app-nav-header></app-nav-header>
    <div id='content'>
      <p class="basic-txt" [innerHTML]='nasvet.msg'>
      </p>
    </div>
  </div>
   `,
  styles: [
  ]
})
export class NasvetiComponent implements OnInit {

  nasvet: any;

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.subscribe(segs =>
      this.ds.getData(segs[0].toString(), +segs[1].toString()).subscribe(res =>
        this.nasvet = res[0])
    );
  }

}
