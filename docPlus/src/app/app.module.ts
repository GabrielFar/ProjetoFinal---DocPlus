import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './administrativo/cadastro/cadastro.component';
import { PacientesComponent } from './administrativo/pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule  
=======
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
>>>>>>> f9aa70cbf03241e07710998303e08d3e11a7405b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
