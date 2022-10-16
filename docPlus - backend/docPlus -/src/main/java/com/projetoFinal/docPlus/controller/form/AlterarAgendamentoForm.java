package com.projetoFinal.docPlus.controller.form;

import com.projetoFinal.docPlus.model.Agendamento;
import com.projetoFinal.docPlus.repository.AgendamentoRepository;

public class AlterarAgendamentoForm {
	private String ano;
	private String mes;
	private String dia;
	private String horario;
	
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
	public Agendamento alterar(int agendamentoId, AgendamentoRepository agendamentoRepository) {
		Agendamento agendamento = agendamentoRepository.getOne(agendamentoId);
		agendamento.setAno(ano);
		agendamento.setMes(mes);
		agendamento.setDia(dia);
		agendamento.setHorario(horario);
		
		return agendamento;
	}
}
