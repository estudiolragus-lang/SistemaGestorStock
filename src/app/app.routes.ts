import { Routes } from '@angular/router';

export const routes: Routes = [
  //pages:
  {
    path: 'Home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },

  {
    path: 'Perfil',
    loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil)
  },

  {
    path: 'CentroComunicacion',
    loadComponent: () => import('./pages/centro-comunicacion/centro-comunicacion').then(m => m.CentroComunicacion)
  },

  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout').then(m => m.AdminLayout)
  },

  {
    // Agregamos la ruta del dashboard
    path: 'Dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard)
  },

  {
    path: 'Clientes',
    loadComponent: () => import('./features/clientes/clientes').then(m => m.Clientes)
  },

  {
    path: 'Inventory',
    loadComponent: () => import('./features/inventory/inventory').then(m => m.Inventory)
  },

  {
    path: 'Sales',
    loadComponent: () => import('./features/sales/sales').then(m => m.Sales)
  },

  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'Home' 
  }

];