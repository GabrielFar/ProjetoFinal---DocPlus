import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';
import { AgendaComponent } from './administrativo/agenda/agenda.component';
import { CadastroComponent } from './administrativo/cadastro/cadastro.component';
import { PacientesComponent } from './administrativo/pacientes/pacientes.component';
import { PagDeLoadComponent } from './pages/pag-de-load/pag-de-load.component';
import { EscUsuarioComponent } from './pages/esc-usuario/esc-usuario.component';
import { ProntuarioComponent } from './medico/prontuario/prontuario.component';
import { AgendaMedicaComponent } from './medico/agenda-medica/agenda-medica.component';
import { AgendaPacienteComponent } from './paciente/agenda-paciente/agenda-paciente.component';

const routes: Routes = [
  { path: '', component: PagDeLoadComponent},
  { path: 'tipoUsuario', component: EscUsuarioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},  
  { path: 'integrantes', component: IntegrantesComponent},
  { path: 'agendamento', component: AgendaComponent},  
  { path: 'cadastro', component: CadastroComponent},  
  { path: 'pacientes', component: PacientesComponent},
  { path: 'agendaMedica', component: AgendaMedicaComponent},
  { path: 'agendaPaciente', component: AgendaPacienteComponent},
  { path: 'prontuario', component: ProntuarioComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }