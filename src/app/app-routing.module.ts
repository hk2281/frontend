import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssortmentComponent } from './assortment/create-assortment.component';
import { DetailAssortmentComponent } from './assortment/detail-assortment.component';
import { ListAssortmentComponent } from './assortment/list-assortment.component';
import { UpdateAssortmentComponent } from './assortment/update-assortment.component';
import { CreateCategoryComponent } from './category/create-category.component';
import { DetailCategoryComponent } from './category/detail-category.component';
import { ListCategoryComponent } from './category/list-category.component';
import { UpdateCategoryComponent } from './category/update-category.component';
import { GridListOverviewExample } from './grid/list-grid.component';
import { CreateProwiderComponent } from './provider/create-prowider.component';
import { DetailProwiderComponent } from './provider/detail-prowider.component';
import { ListProwiderComponent } from './provider/list-prowider.component';
import { UpdateProwiderComponent } from './provider/update-prowider.component';
import { CreateShopComponent } from './shop/create-shop.component';
import { DetailShopComponent } from './shop/detail-shop.component';
import { ListShopComponent } from './shop/list-shop.component';
import { UpdateShopComponent } from './shop/update-shop.component';
import { CreateWorkerComponent } from './worker/create-worker.component';
import { DetailWorkerComponent } from './worker/detail-worker.component';
import { ListWorkerComponent } from './worker/list-worker.component';
import { UpdateWorkerComponent } from './worker/update-worker.component';

const routes: Routes = [
  {path: '', component: GridListOverviewExample},
  {path: 'provider', component: ListProwiderComponent},
  {path: 'provider/create', component: CreateProwiderComponent},
  {path: 'provider/detail/:id', component: DetailProwiderComponent},
  {path: 'provider/update/:id', component: UpdateProwiderComponent},
  {path: 'worker', component: ListWorkerComponent},
  {path: 'worker/create', component: CreateWorkerComponent},
  {path: 'worker/detail/:id', component: DetailWorkerComponent},
  {path: 'worker/update/:id', component: UpdateWorkerComponent},
  {path: 'shop', component: ListShopComponent},
  {path: 'shop/create', component: CreateShopComponent},
  {path: 'shop/detail/:id', component: DetailShopComponent},
  {path: 'shop/update/:id', component: UpdateShopComponent},
  {path: 'category', component: ListCategoryComponent},
  {path: 'category/create', component: CreateCategoryComponent},
  {path: 'category/detail/:id', component: DetailCategoryComponent},
  {path: 'category/update/:id', component: UpdateCategoryComponent},
  {path: 'assortment', component: ListAssortmentComponent},
  {path: 'assortment/create', component: CreateAssortmentComponent},
  {path: 'assortment/datail/:id', component: DetailAssortmentComponent},
  {path: 'assortment/update/:id', component: UpdateAssortmentComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
