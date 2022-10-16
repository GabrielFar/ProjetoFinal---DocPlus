package com.projetoFinal.docPlus.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Prontuario {
	
	@Id @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	private String anotacoes;
	private String ultimaConsulta;
	private String exames;
	
	public Prontuario() {
	}

	public Prontuario(int id, String anotacoes, String ultimaConsulta, String exames) {
		this.id = id;
		this.anotacoes = anotacoes;
		this.ultimaConsulta = ultimaConsulta;
		this.exames = exames;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
}
