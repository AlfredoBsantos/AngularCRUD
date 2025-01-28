import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { CreateEditComponent } from './products/create-edit/create-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, children: [
      { path: '', component: ListComponent },
      { path: 'create', component: CreateEditComponent },
      { path: 'edit/:id', component: CreateEditComponent },
    ] },
];
