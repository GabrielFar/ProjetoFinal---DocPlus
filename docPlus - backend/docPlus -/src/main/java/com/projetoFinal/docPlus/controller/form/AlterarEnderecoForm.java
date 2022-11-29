package com.projetoFinal.docPlus.controller.form;

import com.projetoFinal.docPlus.model.Endereco;
import com.projetoFinal.docPlus.repository.EnderecoRepository;

public class AlterarEnderecoForm {
	private String numero;
	private String rua;
	private String bairro;
	private String cidade;
	private String uf;
	private String cep;
	
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
	}
	public Endereco alterar(int enderecoId, EnderecoRepository enderecoRepository) {
		
		Endereco endereco = enderecoRepository.getOne(enderecoId);
		endereco.setNumero(this.numero);
		endereco.setRua(this.rua);
		endereco.setBairro(this.bairro);
		endereco.setCidade(this.cidade);
		endereco.setUf(this.uf);
		endereco.setCep(this.cep);
		
		return endereco;
	}

}
