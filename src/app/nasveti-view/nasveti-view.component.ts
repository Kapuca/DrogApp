import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-nasveti-view',
  template: `
    <div id='content' class='different'>
      <p class="basic-txt" [innerHTML]='nasvet.msg'>
      </p>
    </div>
  `,
  styles: [
  ]
})
export class NasvetiViewComponent implements OnInit {

  nasvet: any = {};

  constructor( private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fillData();
    this.ds.onStatusChange(online => {
      if (!Object.keys(this.nasvet).length && online) { this.fillData(); }
    });
  }

  fillData(): void {
    this.route.url.subscribe(segs =>
      this.ds.getData('nasveti', +segs[0].toString()).subscribe(res =>
        this.nasvet = res[0])
    );

  }

}
