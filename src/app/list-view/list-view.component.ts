import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  template: `
    <div class="app-list" id='content'>
      <div class='item' *ngFor='let item of items' [routerLink]='item.id'>
        {{ item.title | uppercase }}
      </div>
    </div>
  `,
  styles: [
    '.item:nth-child(2n+1) { background: #f4f4f4; }',
    '.item {padding: 0px 10px 0px 10px; line-height: 2;}',
  ]
})
export class ListViewComponent implements OnInit {

  @Input() items: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
