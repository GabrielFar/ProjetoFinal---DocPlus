package com.projetoFinal.docPlus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoFinal.docPlus.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Integer>{
	
	Endereco findById(int endId);
}
