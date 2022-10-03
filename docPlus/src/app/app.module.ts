import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './administrativo/cadastro/cadastro.component';
import { PacientesComponent } from './administrativo/pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';
import { AgendaComponent } from './administrativo/agenda/agenda.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './pages/contato/contato.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  
    AgendaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
