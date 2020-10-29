import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { OpozorilaComponent } from './opozorila/opozorila.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { ListComponent } from './list/list.component';
import { DrogeComponent } from './droge/droge.component';
import { ZapletiComponent } from './zapleti/zapleti.component';
import { NasvetiComponent } from './nasveti/nasveti.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OpozoriloComponent } from './opozorilo/opozorilo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    InfoComponent,
    OpozorilaComponent,
    EmergencyComponent,
    ListComponent,
    DrogeComponent,
    ZapletiComponent,
    NasvetiComponent,
    NavHeaderComponent,
    OpozoriloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
