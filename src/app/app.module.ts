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


// components
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { JoueurComponent} from "./components/joueur/joueur.component";
import { CalendarComponent } from './components/calendar/calendar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { AjouterJoueurComponent } from './components/ajouter-joueur/ajouter-joueur.component';
import { ListeJoueursComponent } from './components/liste-joueurs/liste-joueurs.component';
import { TestsComponent } from './components/tests/tests.component';
import { GroupeComponent } from './components/groupe/groupe.component';
import { ModifGroupeComponent} from "./components/modif-groupe/modif-groupe.component";


// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import {JoueursService} from "./shared/services/joueurs";

import { environment } from '../environments/environment';
import * as fr from '@angular/common/locales/fr'
import {registerLocaleData} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import { AjouterJoueurGroupeidComponent } from './components/ajouter-joueur-groupeid/ajouter-joueur-groupeid.component';








@NgModule({
    declarations: [
        AppComponent,
        UtilisateurComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        AccueilComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        JoueurComponent,
        CalendarComponent,
        AjouterJoueurComponent,
        ListeJoueursComponent,
        TestsComponent,
        GroupeComponent,
        ModifGroupeComponent,
        CardComponent,
        AjouterJoueurGroupeidComponent,


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
