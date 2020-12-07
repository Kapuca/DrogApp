import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-conn-status',
  template: `
    <div id="connectionStatus" [ngStyle]="{ 'color': statusColor }"><!-- &#9711; -->
      <svg height="64" width="32">
        <circle cx="16" cy="32" r="10" [attr.stroke]="statusColor" stroke-width="4" fill="none" />
      </svg>
      <span class="helper-txt" [innerHTML]="statusText"></span>
    </div>
  `,
  styleUrls: ['./conn-status.component.css'],

})
export class ConnStatusComponent implements OnInit {

  statusColor: string;
  statusText: string;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.updateOnlineStatus(this.ds.isOnline());
    this.ds.onStatusChange(this.updateOnlineStatus);
  }

  updateOnlineStatus(isOnline): void {
    if (isOnline) {
      this.statusColor = '#4caf50';
      this.statusText = 'Vaša naprava <i>ima</i> povezavo do interneta.';
    } else {
      this.statusColor = '#e91e63';
      this.statusText = 'Vaša naprava <i>nima</i> povezave do interneta.';
    }

    console.log(this.statusColor, this.statusText);
  }



}
