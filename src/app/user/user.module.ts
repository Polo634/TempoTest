import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UtilisateurComponent} from "./components/utilisateur/utilisateur.component";



@NgModule({
  declarations: [
    UtilisateurComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UtilisateurComponent
  ],
})
export class UserModule { }
