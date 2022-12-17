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

const routes: Routes = [
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
