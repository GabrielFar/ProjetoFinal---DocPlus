import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PacientesComponent } from './administrativo/pacientes/pacientes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
