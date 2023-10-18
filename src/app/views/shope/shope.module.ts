import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopeRoutingModule } from './shope-routing.module';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { ShopeComponent } from './shope/shope.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    KidsComponent,
    MensComponent,
    ShopeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ShopeRoutingModule,
    RouterModule,
    FormsModule,

  ]
})
export class ShopeModule { }
