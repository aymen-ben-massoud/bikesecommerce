import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutsComponent } from './user-layouts/user-layouts.component';
import { AdminLayoutsComponent } from './admin-layouts/admin-layouts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserLayoutsComponent,
    AdminLayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
