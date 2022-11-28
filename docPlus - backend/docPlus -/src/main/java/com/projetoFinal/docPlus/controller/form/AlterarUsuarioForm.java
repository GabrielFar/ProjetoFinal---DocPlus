package com.projetoFinal.docPlus.controller.form;

import com.projetoFinal.docPlus.model.Endereco;
import com.projetoFinal.docPlus.model.Pessoa;
import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.EnderecoRepository;
import com.projetoFinal.docPlus.repository.PessoaRepository;
import com.projetoFinal.docPlus.repository.UsuarioRepository;

public class AlterarUsuarioForm {
	private String senha;
	private Pessoa pessoa;
	private Endereco endereco;

	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public Pessoa getPessoa() {
		return pessoa;
	}
	public void setPessoa(Pessoa pessoa) {
		this.pessoa = pessoa;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	public Usuario alterar(int userId, UsuarioRepository usuarioRepository, EnderecoRepository enderecoRepository, PessoaRepository pessoaRepository) {
		
		Usuario usuario = usuarioRepository.getOne(userId);
		Endereco endereco = enderecoRepository.findById(this.endereco.getId());
		Pessoa pessoa = pessoaRepository.findById(this.pessoa.getId());
		
		usuario.setSenha(this.senha);
		
		endereco.setNumero(this.endereco.getNumero());
		endereco.setRua(this.endereco.getRua());
		endereco.setBairro(this.endereco.getBairro());
		endereco.setCidade(this.endereco.getCidade());
		endereco.setUf(this.endereco.getUf());
		usuario.setEndereco(endereco);
		
		pessoa.setNome(this.pessoa.getNome());
		pessoa.setCpf(this.pessoa.getCpf());
		pessoa.setDataNasc(this.pessoa.getDataNasc());
		pessoa.setSexo(this.pessoa.getSexo());
		pessoa.setEmail(this.pessoa.getEmail());
		pessoa.setTelefone(this.pessoa.getTelefone());
		pessoa.setPlanoSaude(this.pessoa.getPlanoSaude());
		pessoa.setCRM(this.pessoa.getCRM());
		usuario.setPessoa(pessoa);
				
		return usuario;	
	}

}
