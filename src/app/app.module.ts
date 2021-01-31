import { NgModule } from '@angular/core';
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { CPFPipe } from './pipes/cpf.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ClientsCrudComponent,
    ClientCreateComponent,
    ClientReadComponent,
    CPFPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    },
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
