import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {UtilisateurComponent} from "./components/utilisateur/utilisateur.component";
import {VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {AngularMaterialModule} from "../angular-material/angular-material.module";



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    UtilisateurComponent,
    VerifyEmailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  exports: [
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    UtilisateurComponent,
    VerifyEmailComponent
  ],
})
export class ConnexionModule { }
