import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuardGuard } from './guards/is-logged-in-guard.guard';
import { IsLoggedOutGuardGuard } from './guards/is-logged-out-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate : [IsLoggedOutGuardGuard]
  },
  {
    path: 'pm',
    loadChildren: () => import('./pm/pm.module').then( m => m.PmPageModule),
    canActivate : [IsLoggedInGuardGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
