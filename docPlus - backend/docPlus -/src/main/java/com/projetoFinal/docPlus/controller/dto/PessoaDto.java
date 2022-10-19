package com.projetoFinal.docPlus.controller.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import com.projetoFinal.docPlus.model.Pessoa;

public class PessoaDto {
	private String nome;
	private String cpf;
	private LocalDate dataNasc;
	private char sexo;
	private String email;
	private String telefone;
	private String planoSaude;
	private String cRM;
	
	public PessoaDto(Pessoa pessoa) {
		this.nome = pessoa.getNome();
		this.cpf = pessoa.getCpf();
		this.dataNasc = pessoa.getDataNasc();
		this.sexo = pessoa.getSexo();
		this.email = pessoa.getEmail();
		this.telefone = pessoa.getTelefone();
		this.planoSaude = pessoa.getPlanoSaude();
		this.cRM = pessoa.getCRM();
	}
	
	public String getPlanoSaude() {
		return planoSaude;
	}
	public String getEmail() {
		return email;
	}
	public String getNome() {
		return nome;
	}
	public LocalDate getDataNasc() {
		return dataNasc;
	}
	public char getSexo() {
		return sexo;
	}
	public String getCpf() {
		return cpf;
	}
	public String getTelefone() {
		return telefone;
	}
	public String getCRM( ) {
		return cRM;
	}
	
	public static List<PessoaDto> converter(List<Pessoa> pessoas) {
		return pessoas.stream().map(PessoaDto::new).collect(Collectors.toList());
	} 
}
