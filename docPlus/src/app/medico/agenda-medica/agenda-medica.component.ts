import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/interaface/agendamento';
import { AgendamentoDto } from 'src/app/interaface/agendametoDto';
import { Endereco } from 'src/app/interaface/endereco';
import { Pessoa } from 'src/app/interaface/pessoa';
import { Prontuario } from 'src/app/interaface/prontuario';
import { Usuario } from 'src/app/interaface/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';

@Component({
  selector: 'app-agenda-medica',
  templateUrl: './agenda-medica.component.html',
  styleUrls: ['./agenda-medica.component.css']
})
export class AgendaMedicaComponent implements OnInit {

  anoHoje!: number;
  mesHoje!: number;
  diaHoje!: number;

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
    usuario: this.usuario,
    prontuario: this.prontuario,
    ano: '',
    mes: '',
    dia: '',
    horario: ''
  }

  readonly diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.getDataHoje()
    this.getAgendamentos()
  }

  /**
   * It gets the current date and then generates the labels for the chart
   */
  getDataHoje(){
    let data = new Date;    
    this.anoHoje = data.getFullYear();
    this.mesHoje = data.getMonth() + 1;
    this.diaHoje = data.getDate();    
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

    this.agendamentoService.getNomesAgendamento().subscribe((agendamentos : Agendamento[])=>{
     
      let incrementoDia0 = 0;
      let incrementoDia1 = 1;
      let incrementoDia2 = 2;
      let incrementoDia3 = 3;
      let incrementoDia4 = 4;

      switch ((new Date).getDay()) {
        case 0:
          incrementoDia0 = 1;
          incrementoDia1 = 2;
          incrementoDia2 = 3;
          incrementoDia3 = 4;
          incrementoDia4 = 5;
          break;
        
        case 1:
          incrementoDia0 = 0;
          incrementoDia1 = 1;
          incrementoDia2 = 2;
          incrementoDia3 = 3;
          incrementoDia4 = 4;
          break;
        
        case 2:
          incrementoDia0 = 0;
          incrementoDia1 = 1;
          incrementoDia2 = 2;
          incrementoDia3 = 3;
          incrementoDia4 = 6;
          break;
        
        case 3:
          incrementoDia0 = 0;
          incrementoDia1 = 1;
          incrementoDia2 = 2;
          incrementoDia3 = 5;
          incrementoDia4 = 6;
          break;
        
        case 4:
          incrementoDia0 = 0;
          incrementoDia1 = 1;
          incrementoDia2 = 4;
          incrementoDia3 = 5;
          incrementoDia4 = 6;
          break;

        case 5:
          incrementoDia0 = 0;
          incrementoDia1 = 3;
          incrementoDia2 = 4;
          incrementoDia3 = 5;
          incrementoDia4 = 6;
          break;
        
        case 6:
          incrementoDia0 = 2;
          incrementoDia1 = 3;
          incrementoDia2 = 4;
          incrementoDia3 = 5;
          incrementoDia4 = 6;
          break;
      }

      for (let index = 0; index < agendamentos.length; index++) {   
        
        if (agendamentos[index].ano == String(this.anoHoje) &&
            agendamentos[index].mes == String(this.mesHoje) &&
            agendamentos[index].dia == String(this.diaHoje + incrementoDia0)) {
              
          for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
            let horario = (document.getElementsByClassName("1") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

            if (horario == agendamentos[index].horario) {                 
              (document.getElementsByClassName("1") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].usuario.pessoa.nome
            }                
          }
          
        }

        if (agendamentos[index].ano == String(this.anoHoje) &&
            agendamentos[index].mes == String(this.mesHoje) &&
            agendamentos[index].dia == String(this.diaHoje + incrementoDia1)) {
              
          for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
            let horario = (document.getElementsByClassName("2") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

            if (horario == agendamentos[index].horario) {                 
              (document.getElementsByClassName("2") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].usuario.pessoa.nome
            }                
          }
          
        }

        if (agendamentos[index].ano == String(this.anoHoje) &&
            agendamentos[index].mes == String(this.mesHoje) &&
            agendamentos[index].dia == String(this.diaHoje + incrementoDia2)) {
              
          for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
            let horario = (document.getElementsByClassName("3") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

            if (horario == agendamentos[index].horario) {                 
              (document.getElementsByClassName("3") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].usuario.pessoa.nome
            }                
          }
          
        }

        if (agendamentos[index].ano == String(this.anoHoje) &&
            agendamentos[index].mes == String(this.mesHoje) &&
            agendamentos[index].dia == String(this.diaHoje + incrementoDia3)) {
              
          for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
            let horario = (document.getElementsByClassName("4") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

            if (horario == agendamentos[index].horario) {                 
              (document.getElementsByClassName("4") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].usuario.pessoa.nome
            }                
          }
          
        }

        if (agendamentos[index].ano == String(this.anoHoje) &&
            agendamentos[index].mes == String(this.mesHoje) &&
            agendamentos[index].dia == String(this.diaHoje + incrementoDia4)) {
              
          for (let indexHorario = 0; indexHorario < 17; indexHorario++) {
            let horario = (document.getElementsByClassName("5") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].attributes[1].nodeValue

            if (horario == agendamentos[index].horario) {                 
              (document.getElementsByClassName("5") as HTMLCollectionOf<HTMLDivElement>)[indexHorario].children[0].innerHTML = agendamentos[index].usuario.pessoa.nome
            }                
          }          
        }
      }
    })
  }
}
