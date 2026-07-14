import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { SinPermisos } from './pages/sin-permisos/sin-permisos';

/*NECESITO QUE LAS PAGINAS SE PUEDAN NAVEGAR CON EL TOKEN CUANDO CREAS LA CUENTA*/

export const routes: Routes = [

  /*RUTAS NO PROTEGIDAS POR GUARD:*/

  //pages:
  {
    path: 'Home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'CrearCuenta',
    loadComponent: () => import('./pages/crear-cuenta/crear-cuenta').then(m => m.CrearCuenta)
  },
  {
    path: 'LoguearCuenta',
    loadComponent: () => import('./pages/loguear-cuenta/loguear-cuenta').then(m => m.LoguearCuenta)
  },
  {
    path: 'SinPermisos',
    loadComponent: () => import('./pages/sin-permisos/sin-permisos').then(m => m.SinPermisos)
  },

  /*RUTAS PROTEGIDAS POR GUARD:*/

  {
    path: 'VincularEmpresa',
    loadComponent: () => import('./shared/components/vincular-empresa/vincular-empresa').then(m => m.VincularEmpresa),
    canActivate: [authGuard] // <--- Protegida
  },
  {
    path: 'Perfil',
    loadComponent: () => import('./pages/perfil/perfil').then(m => m.Perfil),
    canActivate: [authGuard] // <--- Protegida
  },
  {
    path: 'CentroComunicacion',
    loadComponent: () => import('./pages/centro-comunicacion/centro-comunicacion').then(m => m.CentroComunicacion),
    canActivate: [authGuard] // <--- Protegida
  },

  //layouts:
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout').then(m => m.AdminLayout),
    canActivate: [authGuard] // <--- Protegida
  },

  // Features:
  {
    path: 'Dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [authGuard] // <--- Protegida
  },
  {
    path: 'Clientes',
    loadComponent: () => import('./features/clientes/clientes').then(m => m.Clientes),
    canActivate: [authGuard] // <--- Protegida
  },
  {
    path: 'Inventory',
    loadComponent: () => import('./features/inventory/inventory').then(m => m.Inventory),
    canActivate: [authGuard] // <--- Protegida
  },
  {
    path: 'Sales',
    loadComponent: () => import('./features/sales/sales').then(m => m.Sales),
    canActivate: [authGuard] // <--- Protegida
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