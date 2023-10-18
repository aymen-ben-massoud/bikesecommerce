import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutsComponent } from './layouts/user-layouts/user-layouts.component';
import { HomeRoutingModule } from './views/home/home-routing.module';
import { AdminloginComponent } from './views/admin/adminlogin/adminlogin.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
{path:'',component:UserLayoutsComponent,children:[{path:'',loadChildren:()=>import('./views/home/home-routing.module').then(m=>m.HomeRoutingModule)},
{path:'shope',loadChildren:()=>import('./views/shope/shope-routing.module').then(m=>m.ShopeRoutingModule)},
{path:'details',loadChildren:()=>import('./views/details/details-routing.module').then(m=>m.DetailsRoutingModule)},
{path:'cart',loadChildren:()=>import('./views/cart/cart-routing.module').then(m=>m.CartRoutingModule)}


]},




{path:'admin',component:AdminloginComponent,children:[{path:'',loadChildren:()=>import('./views/admin/admin-routing.module').then(m=>m.AdminRoutingModule)},


]},


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
