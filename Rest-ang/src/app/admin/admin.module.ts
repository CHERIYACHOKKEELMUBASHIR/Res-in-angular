import { NgModule } from '@angular/core';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListProductsComponent,
    AddProductsComponent,
    AdminComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
