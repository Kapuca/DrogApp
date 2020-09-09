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
    NasvetiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
