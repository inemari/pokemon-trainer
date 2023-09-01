// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { CatalogPage } from './pages/pokemon-catalog/pokemon-catalog.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'trainer',  // Make sure this matches the route used in trainerClick()
    component: TrainerPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'catalog',  // Make sure this matches the route used in catalogClick()
    component: CatalogPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
