import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ListAssortmentComponent } from './assortment/list-assortment.component';
import { CreateAssortmentComponent } from './assortment/create-assortment.component';
import { UpdateAssortmentComponent } from './assortment/update-assortment.component';
import { DetailAssortmentComponent } from './assortment/detail-assortment.component';
@NgModule({
  declarations: [
    AppComponent,
    ListAssortmentComponent,
    CreateAssortmentComponent,
    UpdateAssortmentComponent,
    DetailAssortmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
