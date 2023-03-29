import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {FullCalendarModule} from "@fullcalendar/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";


// components
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { JoueurComponent} from "./components/joueur/joueur.component";
import { AccueilComponent } from './components/accueil/accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { AjouterJoueurComponent } from './components/ajouter-joueur/ajouter-joueur.component';
import { GroupeComponent } from './components/groupe/groupe.component';
import { ModifGroupeComponent} from "./components/modif-groupe/modif-groupe.component";
import {AjouterJoueurGroupeidComponent } from './components/ajouter-joueur-groupeid/ajouter-joueur-groupeid.component';
import {SidenavAMComponent} from './components/sidenav-am/sidenav-am.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import {JoueursService} from "./shared/services/joueurs";

import { environment } from '../environments/environment';
import * as fr from '@angular/common/locales/fr'
import {registerLocaleData} from "@angular/common";
import { TableJoueursAmComponent } from './components/table-joueurs-am/table-joueurs-am.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { TestComponent } from './components/test/test.component';









@NgModule({
    declarations: [
        AppComponent,
        UtilisateurComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        AccueilComponent,
        FooterComponent,
        JoueurComponent,
        AjouterJoueurComponent,
        GroupeComponent,
        ModifGroupeComponent,
        AjouterJoueurGroupeidComponent,
        SidenavAMComponent,
        TableJoueursAmComponent,
        TestComponent,


    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        AppRoutingModule,
        FontAwesomeModule,
        FullCalendarModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
        LayoutModule,
        MatTableModule,
        MatTabsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatPaginatorModule,
    ],
  providers: [
    AuthService,
    JoueursService,
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
