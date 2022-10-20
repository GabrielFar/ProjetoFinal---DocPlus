import { Component, OnInit } from '@angular/core';
import { Listas } from 'src/app/enums/selecionarLista';
import { Agendamento } from 'src/app/interaface/agendamento';
import { Endereco } from 'src/app/interaface/endereco';
import { Pessoa } from 'src/app/interaface/pessoa';
import { Prontuario } from 'src/app/interaface/prontuario';
import { Usuario } from 'src/app/interaface/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

import * as $ from 'jquery'

@Component({
  selector: 'app-agenda-paciente',
  templateUrl: './agenda-paciente.component.html',
  styleUrls: ['./agenda-paciente.component.css']
})
export class AgendaPacienteComponent implements OnInit {

  filtroMedico: string = "";
  nomesMedicos: string[] = ["Dr. Gustavo", "Dra. Maria", "Dra. Carla"];

  displayStyleAgendamento: string = 'none'
  horarioEscolhido: string = ""
  diaAgendaEscolhido: string = ""

  displayStyleMsnMedico: string = "none"
  displayStyleMsnDiaLivre: string = "none"

  usuarioLogado = 'Gabriel'

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    cpf: '',
    dataNasc: '',
    sexo: '',
    email: '',
    telefone: '',
    planoSaude: '',
    cRM: ''
  }

  endereco: Endereco = {
    id: 0,
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: ''
  }

  usuario: Usuario = {
    id: 0,
    senha: '',
    tipo: '',
    pessoa: this.pessoa,
    endereco: this.endereco
  }

  prontuario: Prontuario = {
    id: 0,
    anotacoes: '',
    ultimaConsulta: '',
    exames: ''
  }

  agendamento: Agendamento = {
    id: 0,
    medico: this.usuario,
    paciente: this.usuario,
    prontuario: this.prontuario,
    ano: '',
    mes: '',
    dia: '',
    horario: ''
  }

  readonly diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.getIndexSemana()
    this.getAgendamentos()

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

  /**
   * It gets the current date and then generates the labels for the chart
   */
  getIndexSemana(){
    let data = new Date;    
 
    let indexSemana = data.getDay();
    if (indexSemana == 0 || indexSemana == 6) {
      this.gerarLegendas(0)
    } else {
      this.gerarLegendas(indexSemana - 1)
    }    
    
  }

  /**
   * It generates the legend of the days of the week, based on the day of the week that the user is
   * currently on
   * @param {number} indexDia - number - The index of the day of the week that will be used to generate
   * the legend.
   */
  gerarLegendas(indexDia: number){
    for (let index = 0; index < this.diasFuncionamento.length; index++) {
      
      if (indexDia > 4) {
        indexDia = 0;
      }  

      (document.getElementById("legendaDia" + (index + 1)) as HTMLDivElement).innerHTML = this.diasFuncionamento[indexDia];
      indexDia++;
    }
  }

  getAgendamentos(): void{

    let isMedicoSelecionado = false;
    let medicoBuscado = (document.getElementById("filtroMedico") as HTMLInputElement).value

    for (let index = 0; index < this.nomesMedicos.length; index++) {
      if (this.nomesMedicos[index].toLowerCase() == (medicoBuscado.toLowerCase())) {             
        isMedicoSelecionado = true
      }
    }    
    
    if(isMedicoSelecionado){
      this.limparHorarios()

      this.agendamentoService.getNomesAgendamento(medicoBuscado).subscribe((agendamentos : Agendamento[])=>{
        
        let dados = this.getDias()

        for (let index = 0; index < agendamentos.length; index++) {           
          this.gerarNomes('1', dados.incrementoDia0, agendamentos, dados.dpsHoje0, index)
          this.gerarNomes('2', dados.incrementoDia1, agendamentos, dados.dpsHoje1, index)
          this.gerarNomes('3', dados.incrementoDia2, agendamentos, dados.dpsHoje2, index)
          this.gerarNomes('4', dados.incrementoDia3, agendamentos, dados.dpsHoje3, index)
          this.gerarNomes('5', dados.incrementoDia4, agendamentos, dados.dpsHoje4, index)
        }
        this.desabilitarCampos()

      })
    }
  }
  
  getDias(): {
      incrementoDia0: number ,
      incrementoDia1: number ,
      incrementoDia2: number ,
      incrementoDia3: number ,
      incrementoDia4: number ,
      dpsHoje0: Date ,
      dpsHoje1: Date ,
      dpsHoje2: Date ,
      dpsHoje3: Date ,
      dpsHoje4: Date 
    }
    {
      let hoje = new Date()      

        let dpsHoje0 = new Date(hoje.setDate(hoje.getDate() - 1))
        let dpsHoje1 = new Date(dpsHoje0.setDate(dpsHoje0.getDate() + 1));
        let dpsHoje2 = new Date(dpsHoje1.setDate(dpsHoje1.getDate() + 1));
        let dpsHoje3 = new Date(dpsHoje2.setDate(dpsHoje2.getDate() + 1));
        let dpsHoje4 = new Date(dpsHoje3.setDate(dpsHoje3.getDate() + 1));
        let varAuxiliar = new Date(dpsHoje4.setDate(dpsHoje4.getDate() + 1));        

        let incrementoDia0 = 0;
        let incrementoDia1 = 1;
        let incrementoDia2 = 2;
        let incrementoDia3 = 3;
        let incrementoDia4 = 4;

        let indexSemana = (new Date).getDay()
        
        switch (indexSemana) {
          case 0:
            incrementoDia0 = 1;
            incrementoDia1 = 1;
            incrementoDia2 = 1;
            incrementoDia3 = 1;
            incrementoDia4 = 1;
            break;
            
          case 1:
            incrementoDia0 = 0;
            incrementoDia1 = 0;
            incrementoDia2 = 0;
            incrementoDia3 = 0;
            incrementoDia4 = 0;
            break;
            
          case 2:
            incrementoDia0 = 0;
            incrementoDia1 = 0;
            incrementoDia2 = 0;
            incrementoDia3 = 0;
            incrementoDia4 = 2;
            break;
            
          case 3:
            incrementoDia0 = 0;
            incrementoDia1 = 0;
            incrementoDia2 = 0;
            incrementoDia3 = 2;
            incrementoDia4 = 2;
            break;
          
          case 4:
            incrementoDia0 = 0;
            incrementoDia1 = 0;
            incrementoDia2 = 2;
            incrementoDia3 = 2;
            incrementoDia4 = 2;
            break;

            case 5:
            incrementoDia0 = 0;
            incrementoDia1 = 2;
            incrementoDia2 = 2;
            incrementoDia3 = 2;
            incrementoDia4 = 2;
            break;
            
            case 6:
            incrementoDia0 = 2;
            incrementoDia1 = 2;
            incrementoDia2 = 2;
            incrementoDia3 = 2;
            incrementoDia4 = 2;
            break;
        }

      let dados = {
        incrementoDia0: incrementoDia0,
        incrementoDia1: incrementoDia1,
        incrementoDia2: incrementoDia2,
        incrementoDia3: incrementoDia3,
        incrementoDia4: incrementoDia4,
        dpsHoje0: dpsHoje0,
        dpsHoje1: dpsHoje1,
        dpsHoje2: dpsHoje2,
        dpsHoje3: dpsHoje3,
        dpsHoje4: dpsHoje4
      }
      
      return dados
  }
  
  gerarNomes(dia: string, incremento: number, agendamentos: Agendamento[], data: Date, index: number){

    if (agendamentos[index].ano == String(data.getFullYear()) &&
        agendamentos[index].mes == String(data.getMonth() + 1) &&
        agendamentos[index].dia == String(data.getDate() + incremento)) {
          
      for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
        let horario = (document.getElementsByClassName(dia) as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

        if (horario == agendamentos[index].horario) {                 
          (document.getElementsByClassName(dia) as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].paciente.pessoa.nome
        }                
      }          
    }
  }
  
  limparHorarios(){
    for (let indexDia = 1; indexDia <= 5; indexDia++) {
      for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
          let divNomePaciente = (document.getElementsByClassName(String(indexDia)) as HTMLCollectionOf<HTMLLIElement>)[indexHorario]
          .children
          
          divNomePaciente[0].innerHTML = ""          
      }
    }    
  }

  desabilitarCampos(){

    for (let indexDia = 1; indexDia <= 5; indexDia++) {
      for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
          let divNomePaciente = (document.getElementsByClassName(String(indexDia)) as HTMLCollectionOf<HTMLLIElement>)[indexHorario]
            .children[0];

          ((document.getElementsByClassName(String(indexDia)) as HTMLCollectionOf<HTMLLIElement>)
          [indexHorario]).setAttribute("style", "background-color: white")
         
          if (divNomePaciente.innerHTML != "") {
            ((document.getElementsByClassName(String(indexDia)) as HTMLCollectionOf<HTMLLIElement>)
            [indexHorario]).setAttribute("style", "background-color: rgba(216, 216, 216)")
          }          
      }
    }
    
  }

  setAgendamento(){
    let medico = (document.getElementById("filtroMedico") as HTMLInputElement).value
    let dados = this.getDias()
    let dia
    let mes
    let ano

    switch (Number(this.diaAgendaEscolhido)) {
      case 1:
        dia = dados.dpsHoje0.getDate() + dados.incrementoDia0
        mes = dados.dpsHoje0.getMonth() + 1
        ano = dados.dpsHoje0.getFullYear()
        break;
    
      case 2:
        dia = dados.dpsHoje1.getDate() + dados.incrementoDia1
        mes = dados.dpsHoje1.getMonth() + 1
        ano = dados.dpsHoje1.getFullYear()
        break;

      case 3:
        dia = dados.dpsHoje2.getDate() + dados.incrementoDia2
        mes = dados.dpsHoje2.getMonth() + 1
        ano = dados.dpsHoje2.getFullYear()
        break;

      case 4:
        dia = dados.dpsHoje3.getDate() + dados.incrementoDia3
        mes = dados.dpsHoje3.getMonth() + 1
        ano = dados.dpsHoje3.getFullYear()
        break;

      case 5:
        dia = dados.dpsHoje4.getDate() + dados.incrementoDia4
        mes = dados.dpsHoje4.getMonth() + 1
        ano = dados.dpsHoje4.getFullYear()
        break;
    }

    
  }

  
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

  gerarListas(nomesRetornados: string[], lista: string, divTabela: HTMLDivElement): void{
    divTabela.innerHTML = ""

    if (this.filtroMedico.length > 0 && lista == "m") {
      for (let index = 0; index < nomesRetornados.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + nomesRetornados[index] + "</div>"
      }

    } else if(lista == "m"){      
      for (let index = 0; index < this.nomesMedicos.length; index++) {
        divTabela.innerHTML += "<div style='cursor: pointer;'>" + this.nomesMedicos[index] + "</div>"
      }    
    }
  }

  openPopUpAgendamento(e: Event){
    let isMedicoSelecionado = false;
    let medicoBuscado = (document.getElementById("filtroMedico") as HTMLInputElement).value

    for (let index = 0; index < this.nomesMedicos.length; index++) {
      if (this.nomesMedicos[index].toLowerCase() == (medicoBuscado.toLowerCase())) {             
        isMedicoSelecionado = true
      }
    }

    let isDiaLivre = true
    if ((e as any).path.length == 11) {
      if ((e.target as HTMLLIElement).children[0].innerHTML != "") {
        isDiaLivre = false
      }      
    } else {
      if ((e.target as HTMLDivElement).innerHTML != "") {
        isDiaLivre = false
      }
    }    

    if (isMedicoSelecionado && isDiaLivre) {
      this.displayStyleAgendamento = "block"
  
      if ((e as any).path.length == 11) {
        this.horarioEscolhido = String(((e.target) as HTMLLIElement).attributes[1].nodeValue)
        this.diaAgendaEscolhido = ((e.target) as HTMLLIElement).classList[1]
        
      } else{
        this.horarioEscolhido = String((((e as any).path[1]) as HTMLLIElement).attributes[1].nodeValue)
        this.diaAgendaEscolhido = (((e as any).path[1]) as HTMLLIElement).classList[1]
      }

    } else if(isDiaLivre){
      this.openPopUpMsnMedico()
    } else {
      this.openPopUpMsnDiaLivre()
    }
  }

  closePopUpAgendamento(){
    this.displayStyleAgendamento = "none"
  }

  openPopUpMsnMedico(){
    this.displayStyleMsnMedico = "block";
  }

  closePopUpMsnMedico(){
    this.displayStyleMsnMedico = "none"
  }

  openPopUpMsnDiaLivre(){
    this.displayStyleMsnDiaLivre = "block"
  }

  closePopUpMsnDiaLivre(){
    this.displayStyleMsnDiaLivre = "none"
  }
}
