import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-conn-status',
  template: `
  <div #bckg class='bckg' [style.position]="(collapseBottom ? 'absolute' : 'static')">
    <div #centre class='centre'>
      <svg x="0px" y="0px" viewBox="0 0 493.746 493.746" style="enable-background:new 0 0 493.746 493.746;" [attr.fill]='fill'>
		<g id="XMLID_358_">
		  <path id="XMLID_362_" d="M212.524,356.921c-18.966,18.968-18.966,49.737,0,68.706c18.976,18.965,49.74,18.965,68.715,0c18.965-18.969,18.965-49.738,0-68.706C262.264,337.952,231.5,337.952,212.524,356.921z"/>
		  <path id="XMLID_361_" d="M246.882,241.383c-40.027,0-77.683,15.591-105.971,43.907c-11.113,11.108-11.113,29.112,0,40.213c11.104,11.108,29.1,11.108,40.213,0c17.546-17.571,40.907-27.244,65.758-27.244s48.213,9.673,65.759,27.244c5.561,5.554,12.855,8.33,20.111,8.33c7.294,0,14.55-2.776,20.102-8.33c11.113-11.101,11.113-29.104,0-40.213C324.565,256.974,286.909,241.383,246.882,241.383z"/>
		  <path id="XMLID_360_" d="M246.882,147.743c-65.053,0-126.209,25.335-172.199,71.331c-11.104,11.108-11.104,29.114,0,40.213c11.112,11.108,29.118,11.108,40.212,0c35.248-35.258,82.129-54.672,131.986-54.672c49.837,0,96.718,19.414,131.967,54.672c5.551,5.555,12.846,8.332,20.102,8.332c7.294,0,14.56-2.777,20.111-8.332c11.104-11.099,11.104-29.105,0-40.213C373.071,173.078,311.935,147.743,246.882,147.743z"/>
		  <path id="XMLID_359_" d="M485.436,152.721c-63.711-63.733-148.425-98.825-238.554-98.825S72.039,88.988,8.328,152.721c-11.104,11.109-11.104,29.115,0,40.214c5.561,5.554,12.836,8.329,20.111,8.329c7.275,0,14.57-2.775,20.102-8.329c52.97-52.989,123.419-82.166,198.341-82.166c74.923,0,145.351,29.177,198.323,82.166c11.102,11.108,29.098,11.098,40.213,0.01C496.52,181.836,496.52,163.83,485.436,152.721z"/>
		</g>
	  </svg>
      <p [innerHTML]="statusText"></p>
    </div>
  </div>
  `,
  styleUrls: ['./conn-status.component.css'],

})
export class ConnStatusComponent implements OnInit, OnDestroy, AfterViewInit{

  @Input() collapseBottom = true;
  @Input() 
  set persist(value: boolean) {
	console.log('set persist', value);  
	this._persist = value;
	if ( this.bckg ) {
		if ( this.persist || !this.ds.isOnline() ) { 
			this.showMe(); 
		}else {
			this.hideMe();
		}
	}
  }
  get persist(): boolean { return this._persist; }
  private _persist: boolean;
  @ViewChild('bckg') bckg: ElementRef;
  @ViewChild('centre') centre: ElementRef;
  @Input() timeout = 2000;
  opened: boolean;
  statusText: string;
  fill: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.setMeUp(this.ds.isOnline());
    this.ds.onStatusChange( status => this.updateOnlineStatus(status) );
  }

  ngOnDestroy() { this.hideMe(); }

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
        setTimeout(() => {
			if (!this.persist) { this.hideMe(); }
		}, this.timeout / 2 );
      }, this.timeout);
	  this.fill = '#262626';

    } else {
      this.showMe();
      this.openMe(isOnline);
      setTimeout(() => this.closeMe(isOnline), this.timeout);
	  this.fill = '#26262666';
    }
  }

  closeMe(isOnline: boolean): void {
    this.centre.nativeElement.style.display = 'none';
    this.bckg.nativeElement.style.backgroundColor = isOnline ? '#4caf50' : '#e91e63';
    this.bckg.nativeElement.style.height = '5px';
    
  }

  openMe(isOnline: boolean) {
    this.centre.nativeElement.style.display = 'block';
    this.bckg.nativeElement.style.backgroundColor = (isOnline ? '#4caf50' : '#e91e63') + 'dd';
    this.setMeUp(isOnline);
    this.bckg.nativeElement.style.height = '40px';
  }

  hideMe() {
    this.bckg.nativeElement.style.display = 'none';
  }

  showMe() {
    this.bckg.nativeElement.style.display = 'block';
  }

  setMeUp(isOnline) {
    this.statusText = 'Internetna povezava je ' + (isOnline ? 'vzpostavljena' : 'prekinjena') + '.';
    isOnline ? this.fill = '#262626' : this.fill = '#26262666';
  }

}
