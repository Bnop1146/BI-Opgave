import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'energi',loadChildren: () => import('./energi/energi.module').then( m => m.EnergiPageModule)},
  {path: 'vand',loadChildren: () => import('./vand/vand.module').then( m => m.VandPageModule)},
  {path: 'land',loadChildren: () => import('./land/land.module').then( m => m.LandPageModule)},
  {path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  
  
  {path:'create', component:CreateComponent},
  {path:'read', component: ReadComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
