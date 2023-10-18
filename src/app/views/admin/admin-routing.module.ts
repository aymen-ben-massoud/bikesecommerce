import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SettingsadminComponent } from './settingsadmin/settingsadmin.component';
import { GuardService } from 'src/app/services/guard.service';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'', component:AdminloginComponent},
  {path:'settings', component:SettingsadminComponent, canActivate:[GuardService]},
  {path:'orders', component:OrdersComponent , canActivate:[GuardService]}
  // {path:'settings', component:SettingsadminComponent,canActivate : [GuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
