import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './administrativo/cadastro/cadastro.component';
import { PacientesComponent } from './administrativo/pacientes/pacientes.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AgendaComponent } from './administrativo/agenda/agenda.component';
import { AppRoutingModule } from './app.routing.module';
import { ProntuarioComponent } from './medico/prontuario/prontuario.component';
import { AgendaMedicaComponent } from './medico/agenda-medica/agenda-medica.component';
import { AgendaPacienteComponent } from './paciente/agenda-paciente/agenda-paciente.component';
import { EscUsuarioComponent } from './pages/esc-usuario/esc-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    ContatoComponent,
    IntegrantesComponent,
    SobreComponent,
    PacientesComponent,
    AgendaComponent,
    AgendaMedicaComponent,
    AgendaPacienteComponent,
    ProntuarioComponent,
    EscUsuarioComponent
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
