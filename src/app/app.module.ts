import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CoreModule} from "./core/core.module";
import {ConnexionModule} from "./connexion/connexion.module";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
// routing
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        LayoutModule,
        CoreModule,
        ConnexionModule,
        AppRoutingModule
    ],

  bootstrap: [AppComponent],
})

export class AppModule {

}
