import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule { }
