import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewLaunchComponent } from './new-launch/new-launch.component';

const routes: Routes = [
  { path: 'new-launch', component:NewLaunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
