import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KravaComponent } from './components/krava/krava.component';
import { MlekaraComponent } from './components/mlekara/mlekara.component';

const routes: Routes = [
  { path: 'mlekara', component: MlekaraComponent},
  { path: 'krava', component: KravaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MlekaraComponent, KravaComponent]
