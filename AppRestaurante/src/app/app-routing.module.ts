import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'refeicoes',
    loadChildren: () => import('./refeicoes/refeicoes.module').then( m => m.RefeicoesPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'complementos',
    loadChildren: () => import('./complementos/complementos.module').then( m => m.ComplementosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
