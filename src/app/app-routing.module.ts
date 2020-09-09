import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InfoComponent } from './info/info.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { OpozorilaComponent } from './opozorila/opozorila.component';
import { ListComponent } from './list/list.component';
import { DrogeComponent } from './droge/droge.component';
import { NasvetiComponent } from './nasveti/nasveti.component';
import { ZapletiComponent } from './zapleti/zapleti.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'info', component: InfoComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'opozorila', component: OpozorilaComponent },
  {
    path: 'droge', component: ListComponent,
    children: [{ path: ':name', component: DrogeComponent }]
  },
  {
    path: 'naveti', component: ListComponent,
    children: [{ path: ':name', component: NasvetiComponent }]
  },
  {
    path: 'zapleti', component: ListComponent,
    children: [{ path: ':name', component: ZapletiComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
