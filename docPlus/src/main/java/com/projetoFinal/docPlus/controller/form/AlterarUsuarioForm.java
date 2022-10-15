package com.projetoFinal.docPlus.controller.form;

import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.UsuarioRepository;

public class AlterarUsuarioForm {
	private String senha;

	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Usuario alterar(int userId, UsuarioRepository usuarioRepository) {
		
		Usuario usuario = usuarioRepository.getOne(userId);
		usuario.setSenha(this.senha);
		
		return usuario;	
	}

}
