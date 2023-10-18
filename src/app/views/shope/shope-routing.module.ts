import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { ShopeComponent } from './shope/shope.component';
import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  {path:'',component:ShopeComponent,children:[{path:'kids',component:KidsComponent},

  {path:'mens',component:MensComponent},

]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopeRoutingModule { }
