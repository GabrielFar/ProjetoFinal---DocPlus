import { Component, ElementRef, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as $ from 'jquery'; 
import { Listas } from 'src/app/enums/selecionarLista';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']

})

export class AgendaComponent implements OnInit {
  filtroPaciente: string = "";
  nomesPacientes: string[] = ["Joao Gustavo", "Pedro Henrique", "Ana Carolina", "Paulo Gomes", "Paula Andrade"];
  
  filtroMedico: string = "";
  nomesMedicos: string[] = ["Dr. Gustavo", "Dra. Maria", "Dra. Carla"];

  displayStyleMsn: string = "none";
  popUpMsn: string = ""

  dataConsulta: string = '';
  horarioConsulta: string = "";

  readonly diasFuncionamento: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  constructor() { 
  }
  
  ngOnInit(): void {
    //----Autocompleta a pesquisa do usuário no campo de pesquisa paciente
    $(document.getElementById("listaPacientes") as HTMLDivElement).click(function(e){
      (document.getElementById("filtroPaciente") as HTMLInputElement).value = e.target.innerHTML;    
      (document.getElementById("listaPacientes") as HTMLDivElement).innerHTML = ""      
    });

    //----Limpa a lista de sugestão de autocomplete no campo paciente
    $(document.getElementById("filtroPaciente") as HTMLInputElement).blur(function(e){
      setTimeout(() => {        
        (document.getElementById("listaPacientes") as HTMLDivElement).innerHTML = ""      
      }, 200);
    });

    //----Autocompleta a pesquisa do usuário no campo de pesquisa medico
    $(document.getElementById("listaMedicos") as HTMLDivElement).click(function(e){
      (document.getElementById("filtroMedico") as HTMLInputElement).value = e.target.innerHTML;    
      (document.getElementById("listaMedicos") as HTMLDivElement).innerHTML = ""
    });

    //----Limpa a lista de sugestão de autocomplete no campo medico
    $(document.getElementById("filtroMedico") as HTMLInputElement).blur(function(e){
      setTimeout(() => {        
        (document.getElementById("listaMedicos") as HTMLDivElement).innerHTML = ""      
      }, 200);
    });

    this.teste()

    //---------------------------Limitar o input de seleção de data de agendamento------------------------------------------
    let calendarioAgenda = (document.getElementById("dataConsulta1") as HTMLInputElement)
    let hoje: Date = new Date    
    let mesHoje
    if ((hoje.getMonth() + 1) < 10) {
      mesHoje = "0" + (hoje.getMonth() + 1)
    } else {
      mesHoje = hoje.getMonth() + 1
    }
    
    let diaHoje    
    if (hoje.getDate() < 10) {
      diaHoje = "0" + hoje.getDate()
    } else {
      diaHoje = hoje.getDate()
    }

    let limitador = hoje.getFullYear() + "-" + mesHoje + "-" + diaHoje
    calendarioAgenda.min = limitador    
  }

  //-------------------------------------------Filtro de Paciente---------------------------------------------------

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
  
  //-------------------------------------------Filtro de Medicos-----------------------------------------------
  
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
  
  //---------------------------Geração de Listas de Sugestão de Autocomplete---------------------------------------------------
  
  gerarListas(nomesRetornados: string[], lista: string, divTabela: HTMLDivElement): void{
    divTabela.innerHTML = ""

    if (this.filtroPaciente.length > 0 && lista == "p") {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + nomesRetornados[index] + "</div>"
      }

    } else if (this.filtroMedico.length > 0 && lista == "m") {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + nomesRetornados[index] + "</div>"
      }

    } else if(lista == "p"){      
      for (let index = 0; index < this.nomesPacientes.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + this.nomesPacientes[index] + "</div>"
      }

    } else if(lista == "m"){      
      for (let index = 0; index < this.nomesMedicos.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + this.nomesMedicos[index] + "</div>"
      }    
    }
  } 

  //---------------------------Gravamento de dados de agendamento de consulta---------------------------------------------------

  gravarAgendamento(){
    let isPacienteSelecionado = false;
    let isMedicoSelecionado = false;
    let pacienteBuscado = (document.getElementById("filtroPaciente") as HTMLInputElement).value
    let medicoBuscado = (document.getElementById("filtroMedico") as HTMLInputElement).value
    let diaAgendado = (document.getElementById("dataConsulta1") as HTMLInputElement).valueAsDate
    let indexDiaSemanaAgendado = Number(diaAgendado?.getUTCDay());
    let diaSemanaAgendado = this.diasFuncionamento[indexDiaSemanaAgendado]
    
    for (let index = 0; index < this.nomesPacientes.length; index++) {
          
      if (this.nomesPacientes[index].toLowerCase() == (pacienteBuscado.toLowerCase())) {
        isPacienteSelecionado = true
      }
    }

    for (let index = 0; index < this.nomesMedicos.length; index++) {
          
      if (this.nomesMedicos[index].toLowerCase() == (medicoBuscado.toLowerCase())) {        
        isMedicoSelecionado = true
      }
    }
    
    if(!isMedicoSelecionado){
      this.openPopupMsn("Selecione um Médico!", 'rgba(255, 0, 0, 0.616)');
      
    } else if(!isPacienteSelecionado){
      this.openPopupMsn("Selecione um Paciente!", 'rgba(255, 0, 0, 0.616)');
 
    } else if(this.dataConsulta == ""){
      this.openPopupMsn("Selecione uma Data!", 'rgba(255, 0, 0, 0.616)');
    
    } else if(diaSemanaAgendado == this.diasFuncionamento[0] || diaSemanaAgendado == this.diasFuncionamento[6]){
      this.openPopupMsn("Dia Selecionado é Final de Semana!", 'rgba(255, 0, 0, 0.616)');

    } else if(this.horarioConsulta == ""){
      this.openPopupMsn("Selecione um Horário!", 'rgba(255, 0, 0, 0.616)');

    } else {      
      //Selecionar e alterar o horario na tabela agendamento
      this.openPopupMsn("Agendamento realizado com sucesso", 'rgba(0, 255, 0, 0.616)');
    }
  }

  async teste(){
    let usuarios = await fetch("http://localhost:8080/usuarios")
    console.log(usuarios);
    
  }
  //---------------------------Pop Up de Mensagem de Informação sobre Agendamento---------------------------------------------------

  openPopupMsn(msn: string, cor: string) {
    this.displayStyleMsn = "block";
    this.popUpMsn = msn;
    ((document.getElementById("msnPopUp") as HTMLDivElement).style.backgroundColor = cor)
    setTimeout(() => {
      this.closePopupMsn()
    }, 3000);
  }

  closePopupMsn() {
    this.displayStyleMsn = "none";
  }
}  