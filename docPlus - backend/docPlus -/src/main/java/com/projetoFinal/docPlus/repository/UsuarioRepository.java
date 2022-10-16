package com.projetoFinal.docPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetoFinal.docPlus.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	List<Usuario> findByTipo(String tipo);

	Usuario findById(int userId);

}
