import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {JoueurComponent} from "./components/joueur/joueur.component";
import {AjouterJoueurComponent} from "./components/ajouter-joueur/ajouter-joueur.component";
import {ListeJoueursComponent} from "./components/liste-joueurs/liste-joueurs.component";
import {TestsComponent} from "./components/tests/tests.component";
import {GroupeComponent} from "./components/groupe/groupe.component";
import {ModifGroupeComponent} from "./components/modif-groupe/modif-groupe.component";


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'utilisateur', component: UtilisateurComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard]},
  {path: 'joueur', component: JoueurComponent, children: [
      {path: ':id', component: JoueurComponent},
    ]},
  {path: 'ajouter-joueur', component: AjouterJoueurComponent},
  {path: 'liste-joueurs', component: ListeJoueursComponent},

  {path: 'groupe', component: GroupeComponent},

  {path: 'tests', component: TestsComponent},
  {path : 'modif-groupe', component: ModifGroupeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
