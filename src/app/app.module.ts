import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { KittyComponent } from './kitty/kitty.component';
import { DrogeViewComponent } from './droge-view/droge-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ZapletiViewComponent } from './zapleti-view/zapleti-view.component';
import { NasvetiViewComponent } from './nasveti-view/nasveti-view.component';
import { TimerComponent } from './timer/timer.component';
import { ChatComponent } from './chat/chat.component';
import { KnofiComponent } from './knofi/knofi.component';
import { MeterComponent } from './meter/meter.component';

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
    NavHeaderComponent,
    KittyComponent,
    DrogeViewComponent,
    ListViewComponent,
    ZapletiViewComponent,
    NasvetiViewComponent,
    TimerComponent,
    ChatComponent,
    KnofiComponent,
    MeterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register(environment.serviceWorkerScript)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
