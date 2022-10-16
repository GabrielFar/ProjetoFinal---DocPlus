package com.projetoFinal.docPlus.controller.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.projetoFinal.docPlus.model.Agendamento;

public class AgendamentoDto {
	private String ano;
	private String mes;
	private String dia;
	private String horario;

	public AgendamentoDto(Agendamento agendamento) {
		this.ano = agendamento.getAno();
		this.mes = agendamento.getMes();
		this.dia = agendamento.getDia();
		this.horario = agendamento.getHorario();
	}
	
	public String getAno() {
		return ano;
	}
	public String getMes() {
		return mes;
	}
	public String getDia() {
		return dia;
	}
	public String getHorario() {
		return horario;
	}
	
	public static List<AgendamentoDto> converter(List<Agendamento> agendamentos) {
		return agendamentos.stream().map(AgendamentoDto::new).collect(Collectors.toList());
	} 
}
