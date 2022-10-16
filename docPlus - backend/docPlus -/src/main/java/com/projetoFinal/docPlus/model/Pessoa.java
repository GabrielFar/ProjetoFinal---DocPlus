package com.projetoFinal.docPlus.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pessoa {
	
	@Id @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String nome;
	private String cpf;
	private LocalDate dataNasc;
	private char sexo;
	private String email;
	private String telefone;
	private String planoSaude;
	private String cRM;
	
	public Pessoa() {
	}

	public Pessoa(int id, String nome, String cpf, LocalDate dataNasc, char sexo, String email, String telefone,
			String planoSaude, String cRM) {
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.dataNasc = dataNasc;
		this.sexo = sexo;
		this.email = email;
		this.telefone = telefone;
		this.planoSaude = planoSaude;
		this.cRM = cRM;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public String getCRM() {
		return cRM;
	}

	public void setCRM(String cRM) {
		this.cRM = cRM;
	}
}
