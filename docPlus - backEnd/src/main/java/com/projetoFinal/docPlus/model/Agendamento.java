package com.projetoFinal.docPlus.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Agendamento {
	
	@Id @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	@OneToOne
	private Usuario usuario;
	@OneToOne
	private Prontuario prontuario;
	private String ano;
	private String mes;
	private String dia;
	private String horario;
	
	public Agendamento() {
	}

	public Agendamento(int id, Usuario usuario, Prontuario prontuario, String ano, String mes,
			String dia, String horario) {
		this.id = id;
		this.usuario = usuario;
		this.prontuario = prontuario;
		this.ano = ano;
		this.mes = mes;
		this.dia = dia;
		this.horario = horario;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public String getAno() {
		return ano;
	}
	public void setAno(String ano) {
		this.ano = ano;
	}
	public String getMes() {
		return mes;
	}
	public void setMes(String mes) {
		this.mes = mes;
	}
	public String getDia() {
		return dia;
	}
	public void setDia(String dia) {
		this.dia = dia;
	}
	public String getHorario() {
		return horario;
	}
	public void setHorario(String horario) {
		this.horario = horario;
	}
}
