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
import { CreateCategoryComponent } from './category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category.component';
import { DetailCategoryComponent } from './category/detail-category.component';
import { ListCategoryComponent } from './category/list-category.component';
import { ListShopComponent } from './shop/list-shop.component';
import { DetailShopComponent } from './shop/detail-shop.component';
import { UpdateShopComponent } from './shop/update-shop.component';
import { CreateShopComponent } from './shop/create-shop.component';
import { ListWorkerComponent } from './worker/list-worker.component';
import { DetailWorkerComponent } from './worker/detail-worker.component';
import { UpdateWorkerComponent } from './worker/update-worker.component';
import { CreateWorkerComponent } from './worker/create-worker.component';
import { ListProwiderComponent } from './provider/list-prowider.component';
import { CreateProwiderComponent } from './provider/create-prowider.component';
import { DetailProwiderComponent } from './provider/detail-prowider.component';
import { UpdateProwiderComponent } from './provider/update-prowider.component';
@NgModule({
  declarations: [
    AppComponent,
    ListAssortmentComponent,
    CreateAssortmentComponent,
    UpdateAssortmentComponent,
    DetailAssortmentComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DetailCategoryComponent,
    ListCategoryComponent,
    ListShopComponent,
    DetailShopComponent,
    UpdateShopComponent,
    CreateShopComponent,
    ListWorkerComponent,
    DetailWorkerComponent,
    UpdateWorkerComponent,
    CreateWorkerComponent,
    ListProwiderComponent,
    CreateProwiderComponent,
    DetailProwiderComponent,
    UpdateProwiderComponent,
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
