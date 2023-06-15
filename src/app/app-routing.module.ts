import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'home'},
  // {path: 'things-to-know', component: ThingsToKnowComponent},
  // {path: 'rsvp', component: RSVPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
