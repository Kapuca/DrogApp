import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { OpozorilaComponent } from './opozorila/opozorila.component';
import { ListComponent } from './list/list.component';
import { KittyComponent } from './kitty/kitty.component';
import { DrogeViewComponent } from './droge-view/droge-view.component';
import { NasvetiViewComponent } from './nasveti-view/nasveti-view.component';
import { ZapletiViewComponent } from './zapleti-view/zapleti-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: {animation: 'NOC'}  },
  { path: 'home', component: MainComponent, data: {animation: 'FirstPage'} },
  { path: 'info', component: InfoComponent, data: {animation: 'SecondPage'} },
  { path: 'emergency', component: EmergencyComponent, data: {animation: 'SecondPage'} },
  { path: 'opozorila', component: OpozorilaComponent, data: {animation: 'SecondPageOpozorila'} },
  { path: 'droge', component: ListComponent, data: {animation: 'SecondPage'},
    children: [
      { path: ':id', component: DrogeViewComponent}
    ]},
  { path: 'nasveti', component: ListComponent, data: {animation: 'SecondPage'},
    children: [
      { path: ':id', component: NasvetiViewComponent}
    ]},
  { path: 'zapleti', component: ListComponent, data: {animation: 'SecondPage'},
    children: [
      { path: ':id', component: ZapletiViewComponent}
    ]},
  { path: 'kitty', component: KittyComponent, data: {animation: 'SecondPage'} },
  { path: '**', redirectTo: 'home', pathMatch: 'full', data: {animation: 'NOC'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
