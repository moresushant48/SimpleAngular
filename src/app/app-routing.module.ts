import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolunteerformComponent } from './volunteerform/volunteerform.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  {
    path: "",
    component: AppComponent
  },
  {
    path : "vregister",
    component: VolunteerformComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
