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
    path: 'energi',
    loadChildren: () => import('./energi/energi.module').then( m => m.EnergiPageModule)
  },
  {
    path: 'vand',
    loadChildren: () => import('./vand/vand.module').then( m => m.VandPageModule)
  },
  {
    path: 'land',
    loadChildren: () => import('./land/land.module').then( m => m.LandPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
