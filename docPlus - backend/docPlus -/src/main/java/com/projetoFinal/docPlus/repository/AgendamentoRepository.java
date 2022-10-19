package com.projetoFinal.docPlus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoFinal.docPlus.model.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Integer>{
	
	Agendamento findById(int agendamentoId);
}
