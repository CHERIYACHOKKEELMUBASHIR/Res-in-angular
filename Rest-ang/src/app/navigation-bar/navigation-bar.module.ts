import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list/nav-list.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    NavListComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    MenuBarComponent
  ]
})
export class NavigationBarModule { }
