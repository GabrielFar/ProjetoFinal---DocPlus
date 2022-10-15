package com.projetoFinal.docPlus.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.projetoFinal.docPlus.model.Endereco;

public class EnderecoDto {
	private String numero;
	private String bairro;
	private String cidade;
	private String uf;
	private String cep;
	
	public EnderecoDto(Endereco end) {
		this.numero = end.getNumero();
		this.bairro = end.getBairro();
		this.cidade = end.getCidade();
		this.uf = end.getUf();
		this.cep = end.getCep();
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
	
	public static List<EnderecoDto> converter(List<Endereco> enderecos) {
		return enderecos.stream().map(EnderecoDto::new).collect(Collectors.toList());
	} 
}
