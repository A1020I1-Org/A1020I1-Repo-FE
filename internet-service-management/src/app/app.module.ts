import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {environment} from "./environments/environment";
import {ChatModule} from "./chat/chat.module";

import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        ChatModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
