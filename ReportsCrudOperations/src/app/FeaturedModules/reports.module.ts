import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports:[
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
    
  ]
})
export class ReportsModule { }
