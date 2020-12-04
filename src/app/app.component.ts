import { Component, OnInit } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
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
	
	constructor(private router: Router ) {}

  title = 'DrogApp';

  ngOnInit() {
    ServiceWorkerModule.register(environment.serviceWorkerScript);
  }

  prepareRoute(outlet: RouterOutlet) {
	if (this.router.url.indexOf('/opozorila?show=') >= 0) { outlet.activatedRouteData.animation = 'AnotherSecondPage'; }
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
