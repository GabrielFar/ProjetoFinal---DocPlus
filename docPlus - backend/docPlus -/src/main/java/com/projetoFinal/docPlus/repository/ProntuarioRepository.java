package com.projetoFinal.docPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoFinal.docPlus.model.Prontuario;

public interface ProntuarioRepository extends JpaRepository<Prontuario, Integer>{

	Prontuario findById(int prontuarioId);
}
