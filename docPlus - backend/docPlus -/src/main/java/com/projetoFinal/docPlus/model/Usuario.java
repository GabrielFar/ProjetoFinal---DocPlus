package com.projetoFinal.docPlus.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Usuario {
	
	@Id @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String senha;
	private String tipo;
	
	@OneToOne
	private Pessoa pessoa;
	
	@OneToOne
	private Endereco endereco;

	public Usuario() {
	}

	public Usuario(int userId, String senha, String tipo, Pessoa pessoa, Endereco endereco) {
		this.id = userId;
		this.senha = senha;
		this.tipo = tipo;
		this.pessoa = pessoa;
		this.endereco = endereco;
	}

	public int getUserId() {
		return id;
	}

	public void setUserId(int userId) {
		this.id = userId;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
}
