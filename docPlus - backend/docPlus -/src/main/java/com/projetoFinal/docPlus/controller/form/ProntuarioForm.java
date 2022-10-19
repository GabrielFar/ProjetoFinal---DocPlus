package com.projetoFinal.docPlus.controller.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.projetoFinal.docPlus.model.Prontuario;

public class ProntuarioForm {
	@NotNull
	private int id;
	@NotEmpty @NotBlank
	private String anotacoes;
	@NotEmpty @NotBlank
	private String ultimaConsulta;
	@NotEmpty @NotBlank
	private String exames;
	
	public int getId() {
		return id;
	}

	public String getAnotacoes() {
		return anotacoes;
	}

	public String getUltimaConsulta() {
		return ultimaConsulta;
	}

	public String getExames() {
		return exames;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setAnotacoes(String anotacoes) {
		this.anotacoes = anotacoes;
	}

	public void setUltimaConsulta(String ultimaConsulta) {
		this.ultimaConsulta = ultimaConsulta;
	}

	public void setExames(String exames) {
		this.exames = exames;
	}

	public Prontuario converter() {
		return new Prontuario(id, anotacoes, ultimaConsulta, exames);
	}

}
