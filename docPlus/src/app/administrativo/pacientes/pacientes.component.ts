import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery'; 
import { TiposUsuarios } from 'src/app/enums/tiposUsuarios';
import { Endereco } from 'src/app/interaface/endereco';
import { Usuario } from 'src/app/interaface/usuario';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {  
  constructor(private usuarioService: UsuarioService, private enderecoService: EnderecoService) {}
  usuarios!: Usuario[]
  listaUsuarios = document.getElementsByClassName("informacaoPaciente")as HTMLCollectionOf<HTMLDivElement>

  ngOnInit(): void {
    this.gerarLista()

    let numBtnPressed: string[]
    let lista = document.getElementsByClassName("informacaoPaciente")
    
    setTimeout(() => {
      //-------------------------------Chamar Pop-Up Para Exclusão Paciente-----------------------------------------
      $(document.getElementsByClassName("btnExcluir") as HTMLCollection).click(function(e){           
        numBtnPressed = e.target.attributes[0].value.split(" ");          
        let popUp = document.getElementById("popUp") as HTMLElement
        popUp.style.display = "block"
      });
      
      //------------------------------Exclusão do Paciente------------------------------------------------------
      $(document.getElementById("btnConfirmarExclusao") as HTMLButtonElement).click(function(){
        (lista?.[Number(numBtnPressed[1]) - 1] as HTMLDivElement).setAttribute('hidden', 'true');      
        ((lista?.[Number(numBtnPressed[1]) - 1] as HTMLDivElement).children[0] as HTMLInputElement).setAttribute('value', 'undefined')  
      }, this.excluirUsuario(numBtnPressed));
    }, 500);
  }  

  salvarDados() {  
    //------------------------------------------gravação de alterações de dados------------------------------------------
    for (let index = 0; index < this.listaUsuarios.length; index++) {
      let contaVirgulasEndereco = 0

      let nomePaciente: string = (this.listaUsuarios[index].children[0] as HTMLInputElement).value
      let dataNascPaciente: string = (this.listaUsuarios[index].children[1] as HTMLInputElement).value
      let sexoPaciente: string =  (this.listaUsuarios[index].children[2] as HTMLInputElement).value
      let cpfPaciente: string = (this.listaUsuarios[index].children[3] as HTMLInputElement).value
      let telefonePaciente: string = (this.listaUsuarios[index].children[4] as HTMLInputElement).value
      let emailPaciente = (this.listaUsuarios[index].children[5] as HTMLInputElement).value
      let enderecoPaciente = (this.listaUsuarios[index].children[6] as HTMLInputElement).value
      let planoPaciente = (this.listaUsuarios[index].children[7] as HTMLInputElement).value

      for (let index = 0; index < enderecoPaciente.length; index++) {
        if (enderecoPaciente[index] === ',') {
          contaVirgulasEndereco++
        }
      }

      if (contaVirgulasEndereco === 4) {
        // salvar alterações
      }      
    }
  }

  excluirUsuario(numBtnPressed: string[]){
    console.log(numBtnPressed); 
    return "click"
  }

  montarEndereco(endereco: Endereco): string{
    return endereco.numero + ", " + endereco.rua + ", " + endereco.bairro  + ", " + endereco.cidade
    + ", " + endereco.uf
  }

  gerarLista(){
    this.usuarioService.getDadosUsuarios().subscribe((dadosUsuarios: Usuario[]) => {

      let indexLista = 0
      let listaUsuarios: Usuario[] = []
      for (let index = 0; index < dadosUsuarios.length; index++) {
        if (dadosUsuarios[index].tipo != TiposUsuarios.adm) {
          listaUsuarios[indexLista] = dadosUsuarios[index]
          indexLista++
        }
      }

      for (let index = 0; index < listaUsuarios.length; index++) {
        let lista = document.getElementById("listaPacientes") as HTMLElement
        
        let idPaciente: number = listaUsuarios[index].userId
        let nomePaciente: string = listaUsuarios[index].pessoa.nome
        let dataNascPaciente: string = listaUsuarios[index].pessoa.dataNasc
        let sexoPaciente: string = listaUsuarios[index].pessoa.sexo
        let cpfPaciente: string = listaUsuarios[index].pessoa.cpf
        let telefonePaciente: string = listaUsuarios[index].pessoa.telefone
        let emailPaciente: string = listaUsuarios[index].pessoa.email
        let enderecoPaciente: string = this.montarEndereco(listaUsuarios[index].endereco)
        let planoPaciente: string = listaUsuarios[index].pessoa.planoSaude
    
        let div: HTMLDivElement = document.createElement("div")
        div.setAttribute("class", "informacaoPaciente")
        div.style.borderStyle = 'solid'
        div.style.borderRadius = '0.5rem'
        div.style.borderWidth = '0.5px'
        div.style.padding = '0.5rem'
        div.style.margin = '0.5rem'
        div.style.justifyContent = 'center'
        div.style.flexWrap = 'wrap'
        div.style.display = 'flex'
        div.style.borderColor = 'rgba(248,249,250,1)'
        div.setAttribute("id", ""+(index + 1)+"")
        
        let inputNome: HTMLInputElement = document.createElement("input")
        inputNome.setAttribute("class", "nomePaciente")
        inputNome.style.margin = '4px'
        inputNome.style.padding = '0.5rem'
        inputNome.style.width = '25%'
        inputNome.style.borderWidth = '1px'
        inputNome.style.borderRadius = '2rem'
        inputNome.style.borderColor = 'rgba(248,249,250,1)'
        inputNome.setAttribute("type", "text")
        inputNome.setAttribute("placeholder", "Nome...")
        inputNome.setAttribute("value", ""+nomePaciente+"")
        div.appendChild(inputNome)
  
        let inputDataNasc: HTMLInputElement = document.createElement("input")
        inputDataNasc.setAttribute("class", "dataNascPaciente")
        inputDataNasc.style.textAlign = 'center'
        inputDataNasc.style.margin = '4px'
        inputDataNasc.style.padding = '0.5rem'
        inputDataNasc.style.width = '25%'
        inputDataNasc.style.borderWidth = '1px'
        inputDataNasc.style.borderRadius = '2rem'
        inputDataNasc.style.borderColor = 'rgba(248,249,250,1)'
        inputDataNasc.setAttribute("type", "date")
        inputDataNasc.setAttribute("value", ""+dataNascPaciente+"")
        div.appendChild(inputDataNasc)
  
        let selectSexo: HTMLSelectElement = document.createElement("select")
        selectSexo.setAttribute("class", "sexoPaciente")
        selectSexo.style.textAlign = 'center'
        selectSexo.style.margin = '4px'
        selectSexo.style.padding = '0.5rem'
        selectSexo.style.width = '25%'
        selectSexo.style.borderWidth = '1px'
        selectSexo.style.borderRadius = '2rem'
        selectSexo.style.borderColor = 'rgba(248,249,250,1)'
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
        inputCpf.setAttribute("class", "cpfPaciente")
        inputCpf.style.margin = '4px'
        inputCpf.style.padding = '0.5rem'
        inputCpf.style.borderWidth = '1px'
        inputCpf.style.borderRadius = '2rem'
        inputCpf.style.borderColor = 'rgba(248,249,250,1)'
        inputCpf.setAttribute("type", "text")
        inputCpf.setAttribute("placeholder", "cpf...")
        inputCpf.setAttribute("value", ""+cpfPaciente+"")
        div.appendChild(inputCpf)
  
        let inputTelefone: HTMLInputElement = document.createElement("input")
        inputTelefone.setAttribute("class", "telefonePaciente")
        inputTelefone.style.margin = '4px'
        inputTelefone.style.padding = '0.5rem'
        inputTelefone.style.width = '25%'
        inputTelefone.style.borderWidth = '1px'
        inputTelefone.style.borderRadius = '2rem'
        inputTelefone.style.borderColor = 'rgba(248,249,250,1)'
        inputTelefone.setAttribute("type", "text")
        inputTelefone.setAttribute("placeholder", "Telefone...")
        inputTelefone.setAttribute("value", ""+telefonePaciente+"")
        div.appendChild(inputTelefone)
  
        let inputEmail: HTMLInputElement = document.createElement("input")
        inputEmail.setAttribute("class", "emailPaciente")
        inputEmail.style.margin = '4px'
        inputEmail.style.padding = '0.5rem'
        inputEmail.style.width = '25%'
        inputEmail.style.borderWidth = '1px'
        inputEmail.style.borderRadius = '2rem'
        inputEmail.style.borderColor = 'rgba(248,249,250,1)'
        inputEmail.setAttribute("type", "email")
        inputEmail.setAttribute("placeholder", "Email...")
        inputEmail.setAttribute("value", ""+emailPaciente+"")
        div.appendChild(inputEmail)
  
        let inputEndereco: HTMLInputElement = document.createElement("input")
        inputEndereco.setAttribute("class", "enderecoPaciente")
        inputEndereco.setAttribute("placeholder" , "Nº, Rua, Bairro, Cidade, UF")
        inputEndereco.style.margin = '4px'
        inputEndereco.style.padding = '0.5rem'
        inputEndereco.style.width = '25%'
        inputEndereco.style.borderWidth = '1px'
        inputEndereco.style.borderRadius = '2rem'
        inputEndereco.style.borderColor = 'rgba(248,249,250,1)'
        inputEndereco.setAttribute("type", "text")
        inputEndereco.setAttribute("value", ""+enderecoPaciente+"")
        div.appendChild(inputEndereco)
  
        let inputPlano: HTMLInputElement = document.createElement("input")
        inputPlano.setAttribute("class", "planoPaciente")
        inputPlano.style.margin = '4px'
        inputPlano.style.padding = '0.5rem'
        inputPlano.style.borderWidth = '1px'
        inputPlano.style.borderRadius = '2rem'
        inputPlano.style.borderColor = 'rgba(248,249,250,1)'
        inputPlano.setAttribute("type", "text")
        inputPlano.setAttribute("placeholder", "Plano...")
        inputPlano.setAttribute("value", ""+planoPaciente+"")
        div.appendChild(inputPlano)
  
        let btnExcluir: HTMLButtonElement = document.createElement("button")
        btnExcluir.setAttribute("class", "btnExcluir "+(index + 1)+" "+idPaciente+"")
        btnExcluir.style.width = '25%'
        btnExcluir.style.borderWidth = '1px'
        btnExcluir.style.borderRadius = '2rem'
        btnExcluir.style.borderColor = 'rgba(248,249,250,1)'
        btnExcluir.innerHTML = "Excluir"
        div.appendChild(btnExcluir)

        lista.appendChild(div)
      }             
    })    
  }
  //---------------------------Pop Up de Mensagem de Informação sobre Exclusão---------------------------------------------------

  closePopupMsn() {
    let popUp = document.getElementById("popUp") as HTMLElement
    popUp.style.display = "none"
  }
}