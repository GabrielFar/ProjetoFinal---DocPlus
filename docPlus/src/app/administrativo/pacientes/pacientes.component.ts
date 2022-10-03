import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as $ from 'jquery'; 
import { delayWhen } from 'rxjs';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {  
  constructor() { }

  ngOnInit(): void {
    this.gerarLista()

    let numBtnPressed: number

    //-------------------------------Captura de Evento para Gravar Alterações------------------------------------------------
    let lista = document.getElementsByClassName("informacaoPaciente")
    $(document.getElementById("salvarDados") as HTMLButtonElement).click(function(e){
      gravarDados()    
    });
    
    //-------------------------------Chamar Pop-Up Para Exclusão Paciente-----------------------------------------
    $(document.getElementsByClassName("btnExcluir") as HTMLCollection).click(function(e){

      numBtnPressed = Number(e.target.attributes[0].value.split(" ")[1]);
      let popUp = document.getElementById("teste") as HTMLElement
      popUp.style.display = "block"
    })

    //------------------------------Exclusão do Paciente------------------------------------------------------
    $(document.getElementById("btnConfirmarExclusao") as HTMLButtonElement).click(function(e){
      (lista?.[numBtnPressed - 1] as HTMLDivElement).setAttribute('hidden', 'true');      
      ((lista?.[numBtnPressed - 1] as HTMLDivElement).children[0] as HTMLInputElement).setAttribute('value', 'undefined')
      gravarDados()    
    })

    function gravarDados() {
      //------------------------------------------gravação de alterações de dados------------------------------------------
      for (let index = 0; index < lista?.length; index++) {
        let nomePaciente: string = (lista?.[index].children[0] as HTMLInputElement).value
        let dataNascPaciente: string = (lista?.[index].children[1] as HTMLInputElement).value
        let sexoPaciente: string =  (lista?.[index].children[2] as HTMLInputElement).value
        let cpfPaciente: string = (lista?.[index].children[3] as HTMLInputElement).value
        let telefonePaciente: string = (lista?.[index].children[4] as HTMLInputElement).value
        let emailPaciente = (lista?.[index].children[5] as HTMLInputElement).value
        let enderecoPaciente = (lista?.[index].children[6] as HTMLInputElement).value
        let planoPaciente = (lista?.[index].children[7] as HTMLInputElement).value

        if (nomePaciente != undefined && nomePaciente != 'undefined') {
          //Gravar Dados
          console.log(nomePaciente + " - " + dataNascPaciente + " - " + sexoPaciente + " - " + cpfPaciente + " - "
          + telefonePaciente + " - " + emailPaciente + " - " + enderecoPaciente + " - " + planoPaciente);
        }
      }
    }
  }

  gerarLista(){
    for (let index = 0; index < 5; index++) {
      let lista = document.getElementById("listaPacientes") as HTMLElement
      let nomePaciente: string = 'Gabriel'
      let dataNascPaciente: string = '2022-09-27'
      let sexoPaciente: string =  'M'
      let cpfPaciente: string = '999.999.999-99';
      let telefonePaciente: string = '(49)999999999'
      let emailPaciente: string = 'teste@gmail.com'
      let enderecoPaciente: string = 'Ipumirim, SC'
      let planoPaciente: string = 'São Camilo'
  
      let div: HTMLDivElement = document.createElement("div")
      div.setAttribute("class", "informacaoPaciente border border-dark m-2")
      div.setAttribute("id", ""+(index + 1)+"")
      
      let inputNome: HTMLInputElement = document.createElement("input")
      inputNome.setAttribute("class", "nomePaciente m-1")
      inputNome.setAttribute("type", "text")
      inputNome.setAttribute("placeholder", "Nome...")
      inputNome.setAttribute("value", ""+nomePaciente+"")
      div.appendChild(inputNome)

      let inputDataNasc: HTMLInputElement = document.createElement("input")
      inputDataNasc.setAttribute("class", "dataNascPaciente m-1")
      inputDataNasc.setAttribute("type", "date")
      inputDataNasc.setAttribute("value", ""+dataNascPaciente+"")
      div.appendChild(inputDataNasc)

      let selectSexo: HTMLSelectElement = document.createElement("select")
      selectSexo.setAttribute("class", "sexoPaciente m-1")
      selectSexo.setAttribute("name", "nmSexoPaciente")

        let optionSexoMasc: HTMLOptionElement = document.createElement("option")
        optionSexoMasc.setAttribute("value", "M")
        optionSexoMasc.innerHTML = "Masculino"

        let optionSexoFem: HTMLOptionElement = document.createElement("option")
        optionSexoFem.setAttribute("value", "F")
        optionSexoFem.innerHTML = "Feminino"

        if (sexoPaciente.toUpperCase() == "M") {
          optionSexoMasc.setAttribute("Selected", "true")
        } else {
          optionSexoFem.setAttribute("Selected", "true")
        }      
      
      selectSexo.appendChild(optionSexoMasc)
      selectSexo.appendChild(optionSexoFem)
      div.appendChild(selectSexo)

      let inputCpf: HTMLInputElement = document.createElement("input")
      inputCpf.setAttribute("class", "cpfPaciente m-1")
      inputCpf.setAttribute("type", "text")
      inputCpf.setAttribute("placeholder", "cpf...")
      inputCpf.setAttribute("value", ""+cpfPaciente+"")
      div.appendChild(inputCpf)

      let inputTelefone: HTMLInputElement = document.createElement("input")
      inputTelefone.setAttribute("class", "telefonePaciente m-1")
      inputTelefone.setAttribute("type", "text")
      inputTelefone.setAttribute("placeholder", "Telefone...")
      inputTelefone.setAttribute("value", ""+telefonePaciente+"")
      div.appendChild(inputTelefone)

      let inputEmail: HTMLInputElement = document.createElement("input")
      inputEmail.setAttribute("class", "emailPaciente m-1")
      inputEmail.setAttribute("type", "email")
      inputEmail.setAttribute("placeholder", "Email...")
      inputEmail.setAttribute("value", ""+emailPaciente+"")
      div.appendChild(inputEmail)

      let inputEndereco: HTMLInputElement = document.createElement("input")
      inputEndereco.setAttribute("class", "enderecoPaciente m-1")
      inputEndereco.setAttribute("type", "text")
      inputEndereco.setAttribute("placeholder", "Endereco...")
      inputEndereco.setAttribute("value", ""+enderecoPaciente+"")
      div.appendChild(inputEndereco)

      let inputPlano: HTMLInputElement = document.createElement("input")
      inputPlano.setAttribute("class", "planoPaciente m-1")
      inputPlano.setAttribute("type", "text")
      inputPlano.setAttribute("placeholder", "Plano...")
      inputPlano.setAttribute("value", ""+planoPaciente+"")
      div.appendChild(inputPlano)

      let btnExcluir: HTMLButtonElement = document.createElement("button")
      btnExcluir.setAttribute("class", "btnExcluir "+(index + 1)+"")
      btnExcluir.innerHTML = "Excluir Paciente"
      div.appendChild(btnExcluir)
      
      lista.appendChild(div)      
    }
  }

  //---------------------------Pop Up de Mensagem de Informação sobre Exclusão---------------------------------------------------

  closePopupMsn() {
    let popUp = document.getElementById("teste") as HTMLElement
    popUp.style.display = "none"
  }
}
