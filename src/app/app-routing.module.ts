import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KravaComponent } from './components/krava/krava.component';
import { MlekaraComponent } from './components/mlekara/mlekara.component';
import { ObracunComponent } from './components/obracun/obracun.component';

const routes: Routes = [
  { path: 'mlekara', component: MlekaraComponent},
  { path: 'obracun', component: ObracunComponent},
  { path: 'krava', component: KravaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MlekaraComponent, ObracunComponent, KravaComponent]
