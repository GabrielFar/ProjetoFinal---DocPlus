import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formularioPessoa: FormGroup;
  displayStyleMsn: String = "none"

  constructor(private formBuilderPessoa: FormBuilder, private formBuilderPaciente: FormBuilder) { 
    //----------------------------------Validação de Formulários----------------------------------
    this.formularioPessoa = this.formBuilderPessoa.group({
      nome: ['', [Validators.required]],
      dataNasc: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}'),
                Validators.maxLength(14), Validators.minLength(14)]],
      telefone: ['', [Validators.required, Validators.pattern('[(][0-9]{2}[)][0-9]{9}'),
                      Validators.maxLength(13), Validators.minLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      numCasa: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      rua: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      uf: [''],
      crm: [''],
      planoSaude: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    //----------------------------------Autocomplete de Telefones---------------------------------
    $(document.getElementById("telefonePessoa") as HTMLInputElement).keypress(function(e){
      let telefone = e.target
      if(telefone.value.length == 0){
        telefone.value = '(' + telefone.value;
      } else if(telefone.value.length == 3){
        telefone.value +=  ')';
      }
    })
    //----------------------------------Autocomplete de CPFs---------------------------------
    $(document.getElementById("cpfPessoa") as HTMLInputElement).keypress(function(e){
      let cpf = e.target
      if(cpf.value.length == 3){
        cpf.value += '.'
      } else if(cpf.value.length == 7){
        cpf.value +=  '.';
      } else if(cpf.value.length == 11){
        cpf.value += '-';
      }
    })
  }

  salvarDados(e: any){
   
    let tabela = (document.getElementsByClassName("inputsPessoa"))    
    let nome = (tabela[0].children[1] as HTMLInputElement).value
    let dataNasc = (tabela[1].children[1] as HTMLInputElement).value
    let sexo = (tabela[2].children[1] as HTMLInputElement).value
    let cpf = (tabela[3].children[1] as HTMLInputElement).value
    let telefone = (tabela[4].children[1] as HTMLInputElement).value
    let email = (tabela[5].children[1] as HTMLInputElement).value
    let numCasa = (tabela[6].children[1] as HTMLInputElement).value
    let rua = (tabela[7].children[1] as HTMLInputElement).value
    let bairro = (tabela[8].children[1] as HTMLInputElement).value
    let cidade = (tabela[9].children[1] as HTMLInputElement).value
    let uf = (tabela[10].children[1] as HTMLInputElement).value
    let crm = (tabela[11].children[1] as HTMLInputElement).value
    let planoSaude = (tabela[12].children[1] as HTMLInputElement).value
    
    //Gravar Dados Pessoa
    console.log(nome);
    console.log(dataNasc);
    console.log(sexo);
    console.log(cpf);
    console.log(telefone);
    console.log(email);
    console.log(numCasa);
    console.log(rua);
    console.log(bairro);
    console.log(cidade);
    console.log(uf);
    console.log(crm);
    console.log(planoSaude)
    this.openPopupMsn()
  }

  openPopupMsn() {
    this.displayStyleMsn = "block";
    setTimeout(() => {
      this.closePopupMsn()
    }, 3000);
  }

  closePopupMsn() {
    this.displayStyleMsn = "none";
  }
}
