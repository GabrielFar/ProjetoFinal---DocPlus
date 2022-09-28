import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.gerarLista()

    $(document.getElementById("salvarDados") as HTMLButtonElement).click(function(e){

//------------------------------------------gravação de alterações de dados------------------------------------------
      for (let index = 0; index < 10; index++) {
        let lista = document.getElementById("paciente" + (index + 1))
        let nomePaciente: string = (lista?.children[0] as HTMLInputElement).value
        let dataNascPaciente: string = (lista?.children[1] as HTMLInputElement).value
        let sexoPaciente: string =  (lista?.children[2] as HTMLInputElement).value
        let cpfPaciente: number = Number((lista?.children[3] as HTMLInputElement).value)
        let telefonePaciente: number = Number((lista?.children[4] as HTMLInputElement).value)
        let emailPaciente = (lista?.children[5] as HTMLInputElement).value
        let enderecoPaciente = (lista?.children[6] as HTMLInputElement).value
        let planoPaciente = (lista?.children[7] as HTMLInputElement).value

        if (nomePaciente != undefined) {
          //Gravar Dados
          console.log(nomePaciente + " - " + dataNascPaciente + " - " + sexoPaciente + " - " + cpfPaciente + " - "
          + telefonePaciente + " - " + emailPaciente + " - " + enderecoPaciente + " - " + planoPaciente);
        }
      }    
    });
  }

  gerarLista(){
    for (let index = 0; index < 10; index++) {

      let lista = document.getElementById("listaPacientes") as HTMLElement
      let nomePaciente: string = 'Gabriel'
      let dataNascPaciente: string = '2022-09-27'
      let sexoPaciente: string =  'M'
      let cpfPaciente: string = '999.999.999-99';
      let telefonePaciente: string = '(49)999999999'
      let emailPaciente = 'teste@gmail.com'
      let enderecoPaciente = 'Ipumirim, SC'
      let planoPaciente = 'São Camilo'
      let selectSexoPaciente

      if (sexoPaciente == 'M') {
        selectSexoPaciente = "<select name='nmSexoPaciente' class='sexoPaciente m-1'>"+
                                "<option value='M' selected>Masculino</option>"+
                                "<option value='F'>Feminino</option>"+
                              "</select>"
      
      } else {
        selectSexoPaciente = "<select name='nmSexoPaciente' class='sexoPaciente m-1'>"+
                                "<option value='M'>Masculino</option>"+
                                "<option value='F' selected>Feminino</option>"+
                              "</select>"
      }

      lista.innerHTML += "<div class='informacaoPaciente border border-dark m-2' id='paciente"+ (index + 1) +"'>" + 
                        "<input type='text' class='nomePaciente m-1' placeholder='Nome...' value='" + nomePaciente + "'>" +
                        "<input type='date' class='dataNascPaciente m-1' value='" + dataNascPaciente + "'>" + selectSexoPaciente +
                        "<input type='string' class='cpfPaciente m-1' placeholder='CPF...' value='" + cpfPaciente + "'>" +
                        "<input type='string' class='telefonePaciente m-1' placeholder='Telefone...' value='" + telefonePaciente + "'>" +
                        "<input type='email' class='emailPacinete m-1' placeholder='Email...' value='" + emailPaciente + "'>" +
                        "<input type='text' class='enderecoPaciente m-1' placeholder='Endereço...' value='" + enderecoPaciente + "'>" +
                        "<input type='text' class='planoPaciente m-1' placeholder='Plano de Saúde...' value='" + planoPaciente + "'>" +
                        "</div>"
    }
  }  
}
