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

  constructor() { 
  }

  ngOnInit(): void {
    $(document.getElementById("idListaPacientes") as HTMLDivElement).click(function(e){
      (document.getElementById("idFiltroPaciente") as HTMLInputElement).value = e.target.innerHTML;
      (document.getElementById("idListaPacientes") as HTMLDivElement).innerHTML = ""
    })
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

  gerarLista(nomesLista: string[]){
    let divTabela = document.getElementById("idListaPacientes") as HTMLDivElement;
    divTabela.innerHTML = "";

    if (this.filtroPaciente.length > 0) {
      for (let index = 0; index < nomesLista.length; index++) {
        divTabela.innerHTML += "<li class ='Nomes'>" + nomesLista[index] + "</li>"
      } 
    } else{
      for (let index = 0; index < this.nomesPacientes.length; index++) {
        divTabela.innerHTML += "<li class ='Nomes'>" + this.nomesPacientes[index] + "</li>"
      }
    }
  }
}

