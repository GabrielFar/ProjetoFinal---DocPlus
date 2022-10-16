package com.projetoFinal.docPlus.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.projetoFinal.docPlus.model.Prontuario;

public class ProntuarioDto {
	private String anotacoes;
	private String ultimaConsulta;
	private String exames;
	
	public ProntuarioDto(Prontuario prontuario) {
		this.anotacoes = prontuario.getAnotacoes();
		this.ultimaConsulta = prontuario.getUltimaConsulta();
		this.exames = prontuario.getExames();
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
	
	public static List<ProntuarioDto> converter(List<Prontuario> prontuarios) {
		return prontuarios.stream().map(ProntuarioDto::new).collect(Collectors.toList());
	} 
}
