package com.projetoFinal.docPlus.controller.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.projetoFinal.docPlus.model.Agendamento;
import com.projetoFinal.docPlus.model.Prontuario;
import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.ProntuarioRepository;
import com.projetoFinal.docPlus.repository.UsuarioRepository;

public class AgendamentoForm {
	@NotNull
	private int id;
	@NotEmpty @NotBlank
	private String ano;
	@NotEmpty @NotBlank
	private String mes;
	@NotEmpty @NotBlank
	private String dia;
	@NotEmpty @NotBlank
	private String horario;
	
	private int idProntuario;
	private int idUsuario;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public int getIdProntuario() {
		return idProntuario;
	}
	public void setIdProntuario(int idProntuario) {
		this.idProntuario = idProntuario;
	}
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Agendamento converter(ProntuarioRepository prontuariorepository, UsuarioRepository usuarioRepository) {
		Usuario usuario = usuarioRepository.findById(idUsuario);
		Prontuario prontuario = prontuariorepository.findById(idProntuario);
		return new Agendamento(id, usuario, prontuario, ano, mes, dia, horario);
	}
	
}
