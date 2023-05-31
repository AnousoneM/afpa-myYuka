import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importation du composant Home
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // Définition de la route par défaut
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
