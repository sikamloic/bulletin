import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulletinDetailsComponent } from './pages/bulletin-details/bulletin-details.component';
import { BulletinComponent } from './pages/bulletin/bulletin.component';
import { EleveComponent } from './pages/eleve/eleve.component';
import { ModelesComponent } from './pages/modeles/modeles.component';

const routes: Routes = [
  {path: "", redirectTo: "eleve", pathMatch: "full"},
  {path:"eleve", component: EleveComponent},
  {path: "modele", component: ModelesComponent},
  {path: "bulletin", component: BulletinComponent},
  {path: "bulletin/:id", component: BulletinDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
