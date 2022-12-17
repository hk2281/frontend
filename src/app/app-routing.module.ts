import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssortmentComponent } from './assortment/create-assortment.component';
import { DetailAssortmentComponent } from './assortment/detail-assortment.component';
import { ListAssortmentComponent } from './assortment/list-assortment.component';
import { UpdateAssortmentComponent } from './assortment/update-assortment.component';

const routes: Routes = [
  {path: '', component: ListAssortmentComponent},
  {path: 'create', component: CreateAssortmentComponent},
  {path: 'datail/:id', component: DetailAssortmentComponent},
  {path: 'update/:id', component: UpdateAssortmentComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
