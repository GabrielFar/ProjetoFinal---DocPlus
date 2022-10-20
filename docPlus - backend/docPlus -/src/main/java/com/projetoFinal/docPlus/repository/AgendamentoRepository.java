package com.projetoFinal.docPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoFinal.docPlus.model.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Integer>{
	
	Agendamento findById(int agendamentoId);

	List<Agendamento> findByMedico_Id(int idMedico);

	List<Agendamento> findByMedico_Pessoa_Nome(String nomeMedico);

	List<Agendamento> findByPaciente_Pessoa_Nome(String nomePaciente);
}
