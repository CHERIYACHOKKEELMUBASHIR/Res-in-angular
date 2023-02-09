import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ConformationComponent } from './conformation/conformation.component';

@NgModule({
  declarations: [
    ConformationComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    ConformationComponent
  ]
})
export class SharedModule { }
