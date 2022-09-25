import { Component, ElementRef, OnInit } from '@angular/core';
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
  
  filtroMedico: string = "";
  nomesMedicos: string[] = ["Dr. Gustavo", "Dra. Maria", "Dra. Carla"];

  displayStyleAgendamento: string = "none";
  displayStyleCancelamento: string = "none";
  displayStyleMsn: string = "none";
  popUpMsn: string = ""

  diaNovaConsulta: number = 0;
  horarioNovaConsulta: string = "";

  readonly diasFuncionamentoConsultorio: string[]  = ["segunda", "terca", "quarta", "quinta", "sexta"];
  agenda: object = {1: {
    "8-8.30" : null,
    "8.30-9" : "Joao Gustavo",
    "9-9.30" : null,
    "9.30-10" : null,
    "10-10.30": null,
    "10.30-11": null,
    "11-11.30": null,
    "13-13.30": null,
    "13.30-14": null,
    "14-14.30": null,
    "14.30-15": null,
    "15-15.30": null,
    "15.30-16": null,
    "16-16.30": null,
    "16.30-17": null,
    "17-17.30": null,
    "17.30-18": null
},
2: {
    "8-8.30" : null,
    "8.30-9" : null,
    "9-9.30" : null,
    "9.30-10" : null,
    "10-10.30": null,
    "10.30-11": null,
    "11-11.30": null,
    "13-13.30": null,
    "13.30-14": null,
    "14-14.30": null,
    "14.30-15": null,
    "15-15.30": null,
    "15.30-16": null,
    "16-16.30": null,
    "16.30-17": null,
    "17-17.30": null,
    "17.30-18": null
},
3: {
    "8-8.30" : null,
    "8.30-9" : null,
    "9-9.30" : null,
    "9.30-10" : null,
    "10-10.30": null,
    "10.30-11": null,
    "11-11.30": null,
    "13-13.30": null,
    "13.30-14": null,
    "14-14.30": null,
    "14.30-15": null,
    "15-15.30": null,
    "15.30-16": null,
    "16-16.30": null,
    "16.30-17": null,
    "17-17.30": null,
    "17.30-18": null
},
4: {
    "8-8.30" : null,
    "8.30-9" : null,
    "9-9.30" : null,
    "9.30-10" : null,
    "10-10.30": null,
    "10.30-11": null,
    "11-11.30": null,
    "13-13.30": null,
    "13.30-14": null,
    "14-14.30": null,
    "14.30-15": null,
    "15-15.30": null,
    "15.30-16": null,
    "16-16.30": null,
    "16.30-17": null,
    "17-17.30": null,
    "17.30-18": null
},
5: {
    "8-8.30" : null,
    "8.30-9" : null,
    "9-9.30" : null,
    "9.30-10" : null,
    "10-10.30": null,
    "10.30-11": null,
    "11-11.30": null,
    "13-13.30": null,
    "13.30-14": null,
    "14-14.30": null,
    "14.30-15": null,
    "15-15.30": null,
    "15.30-16": null,
    "16-16.30": null,
    "16.30-17": null,
    "17-17.30": null,
    "17.30-18": null
}} 
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

  //---------------------------Pop Up de Confirmação/Cancelamento de Agendamento de Consulta---------------------------------------------------
  
  mostrarPopUpAgendamento(event: any){    
    this.diaNovaConsulta = event.target.attributes[2].value.split(" ")[1];
    this.horarioNovaConsulta = event.target.attributes[1].value;    
    
    if ((this.agenda as any)[(this.diaNovaConsulta)][this.horarioNovaConsulta] == null) {
      this.openPopupAgendamento()    
    } else {
      this.openPopupCancelamento()
    }
  }

  openPopupAgendamento() {
    this.displayStyleAgendamento = "block";
  }
  closePopupAgendamento() {
    this.displayStyleAgendamento = "none";
  }

  //---------------------------Gravamento de dados de agendamento de consulta---------------------------------------------------

  gravarAgendamento(){
    let isPacienteSelecionado = false;
    let isMedicoSelecionado = false;
    let pacienteBuscado = (document.getElementById("filtroPaciente") as HTMLInputElement).value
    let medicoBuscado = (document.getElementById("filtroMedico") as HTMLInputElement).value
    
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
    
    if (isPacienteSelecionado && isMedicoSelecionado) {
      (this.agenda as any)[(this.diaNovaConsulta)][this.horarioNovaConsulta] = pacienteBuscado
      //Selecionar e alterar a tabela do médico
      this.openPopupMsn("Agendamento realizado com sucesso");
        
    } else if(isMedicoSelecionado){
      this.openPopupMsn("Selecione um paciente!");
      
    } else{
      this.openPopupMsn("Selecione um medico!");

    }
    
  }

  //---------------------------Pop Up de Confirmação de Cancelamento de Consulta---------------------------------------------------

  openPopupCancelamento() {
    this.displayStyleCancelamento = "block";
  }
  closePopupCancelamento() {
    this.displayStyleCancelamento = "none";
  }

  cancelarAgendamento(){    
    (this.agenda as any)[(this.diaNovaConsulta)][this.horarioNovaConsulta] = null
    //Selecionar e alterar a tabela do médico
    this.openPopupMsn("Cancelamento de agendamento realizado com sucesso");

  }

  //---------------------------Pop Up de Mensagem de Informação sobre Agendamento---------------------------------------------------

  openPopupMsn(msn: string) {
    this.displayStyleMsn = "block";
    this.popUpMsn = msn;
    setTimeout(() => {
      this.closePopupMsn()
    }, 2000);
  }

  closePopupMsn() {
    this.displayStyleMsn = "none";
  }

  //---------------------------Mostrar o paciente agendado na tela---------------------------------------------------

  
}  