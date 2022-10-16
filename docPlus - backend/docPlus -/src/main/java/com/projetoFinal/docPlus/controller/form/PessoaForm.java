package com.projetoFinal.docPlus.controller.form;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Pattern;

import com.projetoFinal.docPlus.model.Pessoa;

public class PessoaForm {
	@NotNull
	private int id;
	@NotEmpty @NotBlank
	private String nome;
	@NotEmpty @NotBlank
	private String cpf;
	@NotNull @Past
	private LocalDate dataNasc;
	@NotNull
	private char sexo;
	@NotEmpty @NotBlank
	private String email;
	@NotEmpty @NotBlank
	private String telefone;
	private String planoSaude;
	private String cRM;
	
	public int getId() {
		return id;
	}
	public String getNome() {
		return nome;
	}
	public String getCpf() {
		return cpf;
	}
	public LocalDate getDataNasc() {
		return dataNasc;
	}
	public char getSexo() {
		return sexo;
	}
	public String getEmail() {
		return email;
	}
	public String getTelefone() {
		return telefone;
	}
	public String getPlanoSaude() {
		return planoSaude;
	}
	public String getcRM() {
		return cRM;
	}	
	public void setId(int id) {
		this.id = id;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public void setPlanoSaude(String planoSaude) {
		this.planoSaude = planoSaude;
	}
	public void setcRM(String cRM) {
		this.cRM = cRM;
	}
	public Pessoa converter() {
		return new Pessoa(id, nome, cpf, dataNasc, sexo, email, telefone, planoSaude, cRM);
	}
}
