package com.projetoFinal.docPlus.controller.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.projetoFinal.docPlus.model.Endereco;
import com.projetoFinal.docPlus.model.Pessoa;
import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.EnderecoRepository;
import com.projetoFinal.docPlus.repository.PessoaRepository;

public class UsuarioForm {
	@NotNull
	private int id;
	@NotEmpty @Size(min=8, max=15)
	private String  senha;
	@NotBlank
	private String tipo;
	
	private int idPessoa;
	private int idEndereco;
	
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
	
	public Usuario converter(EnderecoRepository enderecoRepository, PessoaRepository pessoaRepository) {
		Endereco endereco = enderecoRepository.findById(idEndereco);
		Pessoa pessoa = pessoaRepository.findById(idPessoa);
		return new Usuario(id, senha, tipo, pessoa, endereco);
	} 
}
