import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MlekaraComponent } from './components/mlekara/mlekara.component';

const routes: Routes = [
  { path: 'mlekara', component: MlekaraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MlekaraComponent]
