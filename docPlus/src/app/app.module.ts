import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './pages/contato/contato.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SobreComponent,
    ContatoComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
