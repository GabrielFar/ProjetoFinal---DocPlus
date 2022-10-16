package com.projetoFinal.docPlus.controller.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.projetoFinal.docPlus.model.Endereco;

public class EnderecoForm {
	@NotNull
	private int id;
	@NotEmpty @NotBlank
	private String numero;
	@NotEmpty @NotBlank
	private String bairro;
	@NotEmpty @NotBlank
	private String cidade;
	@NotEmpty @NotBlank
	private String uf;
	@NotEmpty @NotBlank
	private String cep;
	
	public int getId() {
		return id;
	}

	public String getNumero() {
		return numero;
	}

	public String getBairro() {
		return bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public String getUf() {
		return uf;
	}

	public String getCep() {
		return cep;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public Endereco converter() {
		return new Endereco(id, numero, bairro, cidade, uf, cep);
	}

}
