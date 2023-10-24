import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate : [IsLoggedOutGuard]
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then( m => m.DashPageModule),
    canActivate : [IsLoggedInGuard]
  },
  {
    path: 'pm',
    loadChildren: () => import('./pm/pm.module').then( m => m.PmPageModule),
    canActivate : [IsLoggedInGuard]
  },
  {
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then( m => m.HrPageModule),
    canActivate : [IsLoggedInGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'madrsa/learning',
    loadChildren: () => import('./madrsa/learning/learning.module').then( m => m.LearningPageModule)
  },
  {
    path: 'madrsa/supervision',
    loadChildren: () => import('./madrsa/supervision/supervision.module').then( m => m.SupervisionPageModule)
  },
  {
    path: 'madrsa/finance',
    loadChildren: () => import('./madrsa/finance/finance.module').then( m => m.FinancePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
