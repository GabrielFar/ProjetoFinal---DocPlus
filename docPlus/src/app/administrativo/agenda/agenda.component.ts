import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']

})
export class AgendaComponent implements OnInit {
  filtroPaciente: string = "";
  nomesPacientes: string[] = ["Joao Gustavo", "Pedro Henrique", "Ana Carolina", "Paulo Gomes", "Paula Andrade"];
  itensListaPacientes = document.getElementsByClassName("Nomes");
  inputPacientes = document.getElementById("filtroPaciente");

  constructor() {    
  }

  ngOnInit(): void {

    $(document.getElementById("listaPacientes") as HTMLDivElement).click(function(e){
      (document.getElementById("filtroPaciente") as HTMLInputElement).value = e.target.innerHTML;
      (document.getElementById("listaPacientes") as HTMLDivElement).innerHTML = ""      
    });
  }

  filtrar(): void{
    let nomesRetornados: string[] = [];
    let index: number = 0;      
    
    for (let i = 0; i < this.nomesPacientes.length; i++) { 
      if (this.nomesPacientes[i].toLowerCase().includes(this.filtroPaciente.toLowerCase())) {
        nomesRetornados[index] = this.nomesPacientes[i]
        index++
      }
    }
    this.gerarLista(nomesRetornados);    
  }

  gerarLista(nomesRetornados: string[]){
    let divTabelaPacientes = document.getElementById("listaPacientes") as HTMLDivElement;
    divTabelaPacientes.innerHTML = ""

    if (this.filtroPaciente.length > 0) {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabelaPacientes.innerHTML += "<div class ='Nomes'>" + nomesRetornados[index] + "</div>"
      } 
    }  else {      
      for (let index = 0; index < this.nomesPacientes.length; index++) {
        divTabelaPacientes.innerHTML += "<div class ='Nomes'>" + this.nomesPacientes[index] + "</div>"
      }    
    }
  }
}

