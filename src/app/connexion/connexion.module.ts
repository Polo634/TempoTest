import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";



@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports: [
    SignInComponent,
  ],
})
export class ConnexionModule { }
