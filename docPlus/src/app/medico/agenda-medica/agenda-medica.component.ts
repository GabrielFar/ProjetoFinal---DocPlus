import { Component, OnInit } from '@angular/core';
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



  readonly diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit(): void {
    this.getDataHoje()
  }

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

  gerarLegendas(indexDia: number){
    for (let index = 0; index < this.diasFuncionamento.length; index++) {
      
      if (indexDia > 4) {
        indexDia = 0;
      }  

      (document.getElementById("legendaDia" + (index + 1)) as HTMLDivElement).innerHTML = this.diasFuncionamento[indexDia];
      indexDia++;
    }
  }
}
