package com.projetoFinal.docPlus.controller.form;

import java.time.LocalDate;

import com.projetoFinal.docPlus.model.Pessoa;
import com.projetoFinal.docPlus.repository.PessoaRepository;

public class AlterarPessoaForm {
	private String nome;
	private String cpf;
	private LocalDate dataNasc;
	private char sexo;
	private String email;
	private String telefone;
	private String planoSaude;
	private String cRM;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public LocalDate getDataNasc() {
		return dataNasc;
	}
	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}
	public char getSexo() {
		return sexo;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getPlanoSaude() {
		return planoSaude;
	}
	public void setPlanoSaude(String planoSaude) {
		this.planoSaude = planoSaude;
	}
	public String getcRM() {
		return cRM;
	}
	public void setcRM(String cRM) {
		this.cRM = cRM;
	}
	public Pessoa alterar(int pessoaId, PessoaRepository pessoaRepository) {
		Pessoa pessoa = pessoaRepository.getOne(pessoaId);
		pessoa.setNome(this.nome);
		pessoa.setCpf(this.cpf);
		pessoa.setDataNasc(this.dataNasc);
		pessoa.setSexo(this.sexo);
		pessoa.setEmail(this.email);
		pessoa.setTelefone(this.telefone);
		pessoa.setPlanoSaude(this.planoSaude);
		pessoa.setCRM(this.cRM);
		return pessoa;
	}

}
