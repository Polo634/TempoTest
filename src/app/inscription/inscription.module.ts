import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
})
export class InscriptionModule { }
