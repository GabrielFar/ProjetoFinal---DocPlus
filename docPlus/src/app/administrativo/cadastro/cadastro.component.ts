import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formularioMedico: FormGroup;
  formularioPaciente: FormGroup;

  constructor(private formBuilderMedico: FormBuilder, private formBuilderPaciente: FormBuilder) { 
    //----------------------------------Validação de Formulários----------------------------------
    this.formularioMedico = this.formBuilderMedico.group({
      nome: ['', [Validators.required]],
      dataNasc: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}'),
                Validators.maxLength(14), Validators.minLength(14)]],
      telefone: ['', [Validators.required, Validators.pattern('[(][0-9]{2}[)][0-9]{5}\-[0-9]{4}'),
                      Validators.maxLength(13), Validators.minLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required]],
      crm: ['', [Validators.required]],
    });

    this.formularioPaciente = this.formBuilderPaciente.group({
      nome: ['', [Validators.required]],
      dataNasc: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}'),
                Validators.maxLength(14), Validators.minLength(14)]],
      telefone: ['', [Validators.required, Validators.pattern('[(][0-9]{2}[)][0-9]{5}\-[0-9]{4}'),
                Validators.maxLength(13), Validators.minLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      endereco: ['', [Validators.required]],
      planoSaude: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    //----------------------------------Autocomplete de Telefones---------------------------------
    $(document.getElementById("telefoneMedico") as HTMLInputElement).keypress(function(e){
      let telefone = e.target
      if(telefone.value.length == 0){
        telefone.value = '(' + telefone.value;
      } else if(telefone.value.length == 3){
        telefone.value +=  ')';
      }
    })

    $(document.getElementById("telefonePaciente") as HTMLInputElement).keypress(function(e){
      let telefone = e.target
      if(telefone.value.length == 0){
        telefone.value = '(' + telefone.value;
      } else if(telefone.value.length == 3){
        telefone.value +=  ')';
      }
    })
    //----------------------------------Autocomplete de CPFs---------------------------------
    $(document.getElementById("cpfMedico") as HTMLInputElement).keypress(function(e){
      let cpf = e.target
      if(cpf.value.length == 3){
        cpf.value += '.'
      } else if(cpf.value.length == 7){
        cpf.value +=  '.';
      } else if(cpf.value.length == 11){
        cpf.value += '-';
      }
    })

    $(document.getElementById("cpfPaciente") as HTMLInputElement).keypress(function(e){
      let cpf = e.target
      if(cpf.value.length == 3){
        cpf.value += '.';
      } else if(cpf.value.length == 7){
        cpf.value +=  '.';
      } else if(cpf.value.length == 11){
        cpf.value += '-';
      }
    })
  }

  salvarDados(e: any){
    let nomeTabelaSelecionada = e.target.id.split("Cadastrar")[1];
    let tabela = (document.getElementsByClassName("inputs"+nomeTabelaSelecionada+""))
    let nome = (tabela[0].children[0] as HTMLInputElement).value
    let dataNasc = (tabela[1].children[0] as HTMLInputElement).value
    let sexo = (tabela[2].children[0] as HTMLInputElement).value
    let cpf = (tabela[3].children[0] as HTMLInputElement).value
    let telefone = (tabela[4].children[0] as HTMLInputElement).value
    let email = (tabela[5].children[0] as HTMLInputElement).value
    let endereco = (tabela[6].children[0] as HTMLInputElement).value
    let crm
    let planoSaude
    
    if (nomeTabelaSelecionada == "Medico") {
      crm = (tabela[7].children[0] as HTMLInputElement).value
      //Gravar Dados Medico
      console.log(nome);
      console.log(dataNasc);
      console.log(sexo);
      console.log(cpf);
      console.log(telefone);
      console.log(email);
      console.log(endereco);
      console.log(crm);
      
    } else {
      planoSaude = (tabela[7].children[0] as HTMLInputElement).value
      //Gravar Dados Paciente
      console.log(nome);
      console.log(dataNasc);
      console.log(sexo);
      console.log(cpf);
      console.log(telefone);
      console.log(email);
      console.log(endereco);
      console.log(planoSaude);
    }
    
  }
}
