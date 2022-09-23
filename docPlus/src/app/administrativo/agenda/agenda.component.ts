import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import { Listas } from 'src/app/Enums/selecionarLista';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']

})

export class AgendaComponent implements OnInit {
  filtroPaciente: string = "";
  nomesPacientes: string[] = ["Joao Gustavo", "Pedro Henrique", "Ana Carolina", "Paulo Gomes", "Paula Andrade"];
  inputPacientes = document.getElementById("filtroPaciente");

  filtroMedico: string = "";
  nomesMedicos: string[] = ["Dr. Gustavo", "Dra. Maria", "Dra. Carla"];
  inputmedicos = document.getElementById("filtroMedico");

  constructor() {    
  }

  ngOnInit(): void {

    $(document.getElementById("listaPacientes") as HTMLDivElement).click(function(e){
      (document.getElementById("filtroPaciente") as HTMLInputElement).value = e.target.innerHTML;    
      (document.getElementById("listaPacientes") as HTMLDivElement).innerHTML = ""      
    });

    $(document.getElementById("filtroPaciente") as HTMLInputElement).blur(function(e){
      setTimeout(() => {        
        (document.getElementById("listaPacientes") as HTMLDivElement).innerHTML = ""      
      }, 200);
    });

    $(document.getElementById("listaMedicos") as HTMLDivElement).click(function(e){
      (document.getElementById("filtroMedico") as HTMLInputElement).value = e.target.innerHTML;    
      (document.getElementById("listaMedicos") as HTMLDivElement).innerHTML = ""      
    });

    $(document.getElementById("filtroMedico") as HTMLInputElement).blur(function(e){
      setTimeout(() => {        
        (document.getElementById("listaMedicos") as HTMLDivElement).innerHTML = ""      
      }, 200);
    });
  }

  //----------------------------------------------------------------------------------------------

  filtrarPacientes(): void{
    let nomesRetornadosPacientes: string[] = [];
    let index: number = 0;
    let divTabelaPacientes = document.getElementById("listaPacientes") as HTMLDivElement;
    
    for (let i = 0; i < this.nomesPacientes.length; i++) { 
      if (this.nomesPacientes[i].toLowerCase().includes(this.filtroPaciente.toLowerCase())) {
        nomesRetornadosPacientes[index] = this.nomesPacientes[i]
        index++
      }
    }    
    this.gerarListas(nomesRetornadosPacientes, Listas.pacientes, divTabelaPacientes);    
  }
  
  //----------------------------------------------------------------------------------------------
  
  filtrarMedicos(): void{
    let nomesRetornadosMedicos: string[] = [];
    let index: number = 0;
    let divTabelaMedicos = document.getElementById("listaMedicos") as HTMLDivElement;   
    
    for (let i = 0; i < this.nomesMedicos.length; i++) { 
      if (this.nomesMedicos[i].toLowerCase().includes(this.filtroMedico.toLowerCase())) {
        nomesRetornadosMedicos[index] = this.nomesMedicos[i]
        index++
      }
    }
    this.gerarListas(nomesRetornadosMedicos, Listas.medicos, divTabelaMedicos);    
  }
  
  //----------------------------------------------------------------------------------------------
  
  gerarListas(nomesRetornados: string[], lista: string, divTabela: HTMLDivElement): void{
    divTabela.innerHTML = ""

    if (this.filtroPaciente.length > 0 && lista == "p") {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabela.innerHTML += "<div>" + nomesRetornados[index] + "</div>"
      }

    } else if (this.filtroMedico.length > 0 && lista == "m") {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabela.innerHTML += "<div>" + nomesRetornados[index] + "</div>"
      }

    } else if(lista == "p"){      
      for (let index = 0; index < this.nomesPacientes.length; index++) {
        divTabela.innerHTML += "<div>" + this.nomesPacientes[index] + "</div>"
      }

    } else if(lista == "m"){      
      for (let index = 0; index < this.nomesMedicos.length; index++) {
        divTabela.innerHTML += "<div>" + this.nomesMedicos[index] + "</div>"
      }    
    }
  }
}

  