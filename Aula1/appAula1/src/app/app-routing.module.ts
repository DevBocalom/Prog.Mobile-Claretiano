import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

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
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'cargos',
    loadChildren: () => import('./cargos/cargos.module').then( m => m.CargosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
