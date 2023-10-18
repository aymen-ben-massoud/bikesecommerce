import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopeModule } from './views/shope/shope.module';

import { AdminModule } from './views/admin/admin.module';
import { DetailsModule } from './views/details/details.module';
import { DetailsRoutingModule } from './views/details/details-routing.module';
import { CartModule } from './views/cart/cart.module';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './views/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    ToastrModule.forRoot(),
    LayoutsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ShopeModule,
    HttpClientModule ,
    ReactiveFormsModule,
    AdminModule,
    FormsModule,
    DetailsModule, 
    CartModule, BrowserAnimationsModule,
    HomeModule
    

   
   

  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
