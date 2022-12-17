import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery'; 
import { TiposUsuarios } from 'src/app/enums/tiposUsuarios';
import { Endereco } from 'src/app/interaface/endereco';
import { Usuario } from 'src/app/interaface/usuario';
import { AgendamentoService } from 'src/app/services/agendamento/agendamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {  
  constructor(private usuarioService: UsuarioService, private agendamentoService: AgendamentoService) {}
  usuarios!: Usuario[]
  listaUsuarios = document.getElementsByClassName("informacaoPaciente")as HTMLCollectionOf<HTMLDivElement>

  ngOnInit(): void {
    this.gerarListas()

    let BtnClicado: string[]
    let lista = document.getElementsByClassName("informacaoPaciente")
    
    setTimeout(() => {
      //-------------------------------Chamar Pop-Up Para Exclusão Paciente-----------------------------------------
      $(document.getElementsByClassName("btnExcluir") as HTMLCollection).click(function(e){           
        BtnClicado = e.target.attributes[0].value.split(" ");          
        (document.getElementById("popUp") as HTMLElement).style.display = "block"
      });
      
      //------------------------------Exclusão do Paciente-----------------------------------------------------
      $(document.getElementById("btnConfirmarExclusao") as HTMLButtonElement).click(() => {
        (lista?.[Number(BtnClicado[1]) - 1] as HTMLDivElement).setAttribute('hidden', 'true');      
        ((lista?.[Number(BtnClicado[1]) - 1] as HTMLDivElement).children[0] as HTMLInputElement).setAttribute('value', 'undefined')
        this.deleteUsuario(Number(BtnClicado[2]))
      })

      $(document.getElementsByClassName("btnSalvar") as HTMLCollection).click((e) => {        
        this.salvarDados(Number(e.target.classList[2]))
      })
    }, 500);
  }

  deleteUsuario(userId: number){
    this.agendamentoService.deleteAgendamentos(userId).subscribe(() => {
      this.usuarioService.deleteUsuario(userId).subscribe()     
    })    
  }

  salvarDados(userId: number) {  
    //------------------------------------------gravação de alterações de dados------------------------------------------
    console.log(userId);
    
  }

  montarEndereco(endereco: Endereco): string{
    return endereco.numero + ", " + endereco.rua + ", " + endereco.bairro  + ", " + endereco.cidade
    + ", " + endereco.uf
  }

  gerarListas(){
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
        
        let listaPacientes = document.getElementById("listaPacientes") as HTMLElement
        let listaMedicos = document.getElementById("listaMedicos") as HTMLElement
        
        let idPaciente: number = listaUsuarios[index].userId
        let nomePaciente: string = listaUsuarios[index].pessoa.nome
        let dataNascPaciente: string = listaUsuarios[index].pessoa.dataNasc
        let sexoPaciente: string = listaUsuarios[index].pessoa.sexo
        let cpfPaciente: string = listaUsuarios[index].pessoa.cpf
        let telefonePaciente: string = listaUsuarios[index].pessoa.telefone
        let emailPaciente: string = listaUsuarios[index].pessoa.email
        let enderecoPaciente: string = this.montarEndereco(listaUsuarios[index].endereco)
        let planoPaciente: string = listaUsuarios[index].pessoa.planoSaude
        let crmUsuario: string = listaUsuarios[index].pessoa.crm        
        
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
        inputNome.style.margin = '0.25rem'
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
        inputDataNasc.style.margin = '0.25rem'
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
        selectSexo.style.margin = '0.25rem'
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
        inputCpf.style.margin = '0.25rem'
        inputCpf.style.padding = '0.5rem'
        inputCpf.style.width = "25%"
        inputCpf.style.borderWidth = '1px'
        inputCpf.style.borderRadius = '2rem'
        inputCpf.style.borderColor = 'rgba(248,249,250,1)'
        inputCpf.setAttribute("type", "text")
        inputCpf.setAttribute("placeholder", "cpf...")
        inputCpf.setAttribute("value", ""+cpfPaciente+"")
        div.appendChild(inputCpf)
  
        let inputTelefone: HTMLInputElement = document.createElement("input")
        inputTelefone.setAttribute("class", "telefonePaciente")
        inputTelefone.style.margin = '0.25rem'
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
        inputEmail.style.margin = '0.25rem'
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
        inputEndereco.style.margin = '0.25rem'
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
        inputPlano.style.margin = '0.25rem'
        inputPlano.style.padding = '0.5rem'
        inputPlano.style.width = "25%"
        inputPlano.style.borderWidth = '1px'
        inputPlano.style.borderRadius = '2rem'
        inputPlano.style.borderColor = 'rgba(248,249,250,1)'
        inputPlano.setAttribute("type", "text")
        inputPlano.setAttribute("placeholder", "Plano...")
        inputPlano.setAttribute("value", ""+planoPaciente+"")
        div.appendChild(inputPlano)

        if (crmUsuario != null) {
          let inputCrm: HTMLInputElement = document.createElement("input")
          inputCrm.setAttribute("class", "CrmPaciente")
          inputCrm.style.margin = '0.25rem'
          inputCrm.style.padding = '0.5rem'
          inputCrm.style.width = "25%"
          inputCrm.style.borderWidth = '1px'
          inputCrm.style.borderRadius = '2rem'
          inputCrm.style.borderColor = 'rgba(248,249,250,1)'
          inputCrm.setAttribute("type", "text")
          inputCrm.setAttribute("placeholder", "Crm...")
          inputCrm.setAttribute("value", ""+crmUsuario+"")
          div.appendChild(inputCrm)
        }
  
        let btnExcluir: HTMLButtonElement = document.createElement("button")
        btnExcluir.setAttribute("class", "btnExcluir "+(index + 1)+" "+idPaciente+"")
        btnExcluir.style.width = '25%'
        btnExcluir.style.borderWidth = '1px'
        btnExcluir.style.borderRadius = '2rem'
        btnExcluir.style.borderColor = 'rgba(248,249,250,1)'
        btnExcluir.style.padding = '0.5rem'
        btnExcluir.style.margin = '0.25rem'
        btnExcluir.innerHTML = "Excluir"
        div.appendChild(btnExcluir)

        let btnSalvar: HTMLButtonElement = document.createElement("button")
        btnSalvar.setAttribute("class", "btnSalvar "+(index + 1)+" "+idPaciente+"")
        btnSalvar.style.width = '25%'
        btnSalvar.style.borderWidth = '1px'
        btnSalvar.style.borderRadius = '2rem'
        btnSalvar.style.borderColor = 'rgba(248,249,250,1)'
        btnSalvar.style.background = '#048436'
        btnSalvar.style.color = 'white'
        btnSalvar.style.padding = '0.5rem'
        btnSalvar.style.margin = '0.25rem'
        btnSalvar.innerHTML = "Salvar Alterações"
        div.appendChild(btnSalvar)

        if (crmUsuario != null) {
          listaMedicos.appendChild(div)
        } else {
          listaPacientes.appendChild(div)
        }
      }             
    })    
  }
  //---------------------------Pop Up de Mensagem de Informação sobre Exclusão---------------------------------------------------

  closePopupMsn() {
    let popUp = document.getElementById("popUp") as HTMLElement
    popUp.style.display = "none"
  }
}