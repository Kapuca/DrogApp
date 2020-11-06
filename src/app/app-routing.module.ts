import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'opozorila', component: OpozorilaComponent },
  { path: 'droge', component: ListComponent,
    children: [
      { path: ':id', component: DrogeViewComponent}
    ]},
  { path: 'nasveti', component: ListComponent,
    children: [
      { path: ':id', component: NasvetiViewComponent}
    ]},
  { path: 'zapleti', component: ListComponent,
    children: [
      { path: ':id', component: ZapletiViewComponent}
    ]},
  { path: 'kitty', component: KittyComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
