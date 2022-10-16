package com.projetoFinal.docPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoFinal.docPlus.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

	Pessoa findById(int pessoaId);
}
