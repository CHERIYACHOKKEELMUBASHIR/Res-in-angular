import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module')
    .then(ndl=>ndl.AdminModule)
  },
  {
    path:'food-items',
    loadChildren:()=>import('./product/product.module')
    .then(ndl=>ndl.ProductModule)
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
