package com.projetoFinal.docPlus.controller.dto;
import com.projetoFinal.docPlus.model.Usuario;

import java.util.List;
import java.util.stream.Collectors;

public class UsuarioDto {
	private int userId;
	private String tipo;
	
	public UsuarioDto(Usuario user) {
		this.userId = user.getUserId();
		this.tipo = user.getTipo();
	}

	public int getUserId() {
		return userId;
	}

	public String getTipo() {
		return tipo;
	}

	public static List<UsuarioDto> converter(List<Usuario> usuarios) {
		return usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
	} 
}
