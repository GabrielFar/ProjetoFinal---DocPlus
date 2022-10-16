package com.projetoFinal.docPlus.controller.form;

import com.projetoFinal.docPlus.model.Prontuario;
import com.projetoFinal.docPlus.repository.ProntuarioRepository;

public class AlterarProntuarioForm {
	private String anotacoes;
	private String ultimaConsulta;
	private String exames;
	
	public String getAnotacoes() {
		return anotacoes;
	}
	public void setAnotacoes(String anotacoes) {
		this.anotacoes = anotacoes;
	}
	public String getUltimaConsulta() {
		return ultimaConsulta;
	}
	public void setUltimaConsulta(String ultimaConsulta) {
		this.ultimaConsulta = ultimaConsulta;
	}
	public String getExames() {
		return exames;
	}
	public void setExames(String exames) {
		this.exames = exames;
	}
	public Prontuario alterar(int prontuarioId, ProntuarioRepository prontuariorepository) {
		
		Prontuario prontuario = prontuariorepository.getOne(prontuarioId);
		prontuario.setAnotacoes(anotacoes);
		prontuario.setUltimaConsulta(ultimaConsulta);
		prontuario.setExames(exames);
		
		return prontuario;
	}
}
