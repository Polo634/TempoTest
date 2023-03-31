import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {JoueurComponent} from "./components/joueur/joueur.component";
import {ModifGroupeComponent} from "./components/modif-groupe/modif-groupe.component";
import {AjouterJoueurGroupeidComponent} from "./components/ajouter-joueur-groupeid/ajouter-joueur-groupeid.component";
import {TableJoueursAmComponent} from "./components/table-joueurs-am/table-joueurs-am.component";

const routes : Routes = [
  {path: '', component: JoueurComponent},
  {path : 'modif-groupe', component: ModifGroupeComponent},
  {path: 'ajouter-joueur-groupid', component: AjouterJoueurGroupeidComponent},
  {path: 'liste-joueurs', component: TableJoueursAmComponent},
  {path: ':id', component: JoueurComponent},

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ParticipantsRoutingModule {}
