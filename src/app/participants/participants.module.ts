import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JoueurComponent} from "./components/joueur/joueur.component";
import {AjouterJoueurGroupeidComponent} from "./components/ajouter-joueur-groupeid/ajouter-joueur-groupeid.component";
import {TableJoueursAmComponent} from "./components/table-joueurs-am/table-joueurs-am.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {ParticipantsRoutingModule} from "./participants-routing.module";
import {ModifGroupeComponent} from "./components/modif-groupe/modif-groupe.component";



@NgModule({
  declarations: [
    JoueurComponent,
    AjouterJoueurGroupeidComponent,
    TableJoueursAmComponent,
    ModifGroupeComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    AngularMaterialModule,
    ParticipantsRoutingModule
  ],
  exports: [
    JoueurComponent,
    AjouterJoueurGroupeidComponent,
    TableJoueursAmComponent,
    ModifGroupeComponent
  ]
})
export class ParticipantsModule { }
