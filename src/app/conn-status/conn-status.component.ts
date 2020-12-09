import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-conn-status',
  template: `
  <div #bckg class='bckg' [style.position]="(collapseBottom ? 'absolute' : 'static')">
    <div #centre class='centre'>
      <svg height="32" width="32">
        <circle cx="16" cy="16" r="10" [attr.stroke]="'#000000'" stroke-width="4" fill="none" />
      </svg>
      <p [innerHTML]="statusText"></p>
    </div>
  </div>
  `,
  styleUrls: ['./conn-status.component.css'],

})
export class ConnStatusComponent implements OnInit, AfterViewInit{

  @Input() collapseBottom = true;
  @Input() persist: boolean;
  @ViewChild('bckg') container: ElementRef;
  @ViewChild('centre') wrapper: ElementRef;
  @Input() timeout = 2000;
  opened: boolean;
  statusText: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.onStatusChange( status => this.updateOnlineStatus(status) );
  }

  ngAfterViewInit() {
    if (this.persist || !this.ds.isOnline()) {
      this.updateOnlineStatus(this.ds.isOnline());
    }
  }

  updateOnlineStatus(isOnline): void {
    console.log('updateOnlineStatus', isOnline, this.persist);
    if (isOnline) {
      this.showMe();
      this.openMe(isOnline);

      setTimeout(() => {
        this.closeMe(isOnline);
        if (!this.persist) { setTimeout(() => this.hideMe(), this.timeout / 2 ); }
      }, this.timeout);

    } else {
      this.showMe();
      this.openMe(isOnline);
      setTimeout(() => this.closeMe(isOnline), this.timeout);
    }
  }

  closeMe(isOnline: boolean): void {
    this.wrapper.nativeElement.style.display = 'none';
    this.container.nativeElement.style.backgroundColor = isOnline ? '#4caf50' : '#e91e63';
    this.container.nativeElement.style.height = '5px';
  }

  openMe(isOnline: boolean) {
    this.wrapper.nativeElement.style.display = 'block';
    this.container.nativeElement.style.backgroundColor = (isOnline ? '#4caf50' : '#e91e63') + 'a0';
    this.statusText = 'Internetna povezava ' + (isOnline ? 'vzpostavljena' : 'prekinjena') + '.';
    this.container.nativeElement.style.height = '100%';
  }

  hideMe() {
    this.container.nativeElement.style.display = 'none';
  }

  showMe() {
    this.container.nativeElement.style.display = 'block';
  }




}
