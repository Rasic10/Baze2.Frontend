import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KravaComponent } from './components/krava/krava.component';
import { MlekaraComponent } from './components/mlekara/mlekara.component';
import { ObracunComponent } from './components/obracun/obracun.component';
import { PodaciOMuziComponent } from './components/podaci-o-muzi/podaci-o-muzi.component';
import { ZaposlenComponent } from './components/zaposlen/zaposlen.component';

const routes: Routes = [
  { path: 'mlekara', component: MlekaraComponent},
  { path: 'obracun', component: ObracunComponent},
  { path: 'krava', component: KravaComponent},
  { path: 'podaciomuzi', component: PodaciOMuziComponent},
  { path: 'zaposlen', component: ZaposlenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MlekaraComponent, ObracunComponent, KravaComponent, PodaciOMuziComponent, ZaposlenComponent]
