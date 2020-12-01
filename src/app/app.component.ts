import { Component, OnInit } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit{

  title = 'DrogApp';

  ngOnInit() {
    ServiceWorkerModule.register(environment.serviceWorkerScript);
    Notification.requestPermission();
  }
  
    prepareRoute(outlet: RouterOutlet) {
	  return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
