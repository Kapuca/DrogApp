import { Component, OnInit } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { slideInAnimation } from './animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit{

  title = 'DrogApp';
  onOpozorila: boolean;

  constructor(private router: Router, private loc: Location ) { }

  ngOnInit() {
    ServiceWorkerModule.register(environment.serviceWorkerScript);
	this.loc.onUrlChange((url, state) => {
		console.log('url', url);
		this.onOpozorila = url.includes('opozorila');
		console.log('onOpozorila', this.onOpozorila);
		
	});
  }

  prepareRoute(outlet: RouterOutlet) {
    if (this.router.url.indexOf('/opozorila?show=') >= 0) {
      outlet.activatedRouteData.animation = 'AnotherSecondPage';
    }
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
