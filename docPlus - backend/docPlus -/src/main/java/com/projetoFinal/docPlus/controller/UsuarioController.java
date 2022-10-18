package com.projetoFinal.docPlus.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.projetoFinal.docPlus.controller.dto.UsuarioDto;
import com.projetoFinal.docPlus.controller.form.AlterarUsuarioForm;
import com.projetoFinal.docPlus.controller.form.UsuarioForm;
import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.EnderecoRepository;
import com.projetoFinal.docPlus.repository.PessoaRepository;
import com.projetoFinal.docPlus.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired 
	private UsuarioRepository usuarioRepository; 
	
	@Autowired 
	private EnderecoRepository enderecoRepository;
	
	@Autowired 
	private PessoaRepository pessoaRepository;
	
	@CrossOrigin
	@GetMapping
	public List<UsuarioDto> listar(String tipo){
		
		if (tipo == null) {
			List<Usuario> usuarios = usuarioRepository.findAll(); 
			
			return UsuarioDto.converter(usuarios); 	
		} else {
			List<Usuario> usuarios = usuarioRepository.findByTipo(tipo); 
			return UsuarioDto.converter(usuarios); 	
		}
	}
	
	@CrossOrigin
	@GetMapping("/{userId}")
	public ResponseEntity<UsuarioDto> selecionarUsuario(@PathVariable int userId) {
		
		Usuario usuario = usuarioRepository.findById(userId);
		
		if (usuario != null) {
			return ResponseEntity.ok(new UsuarioDto(usuario));
		}
		return ResponseEntity.notFound().build();
	}
	
	@CrossOrigin
	@PostMapping
	@Transactional
	public ResponseEntity<UsuarioDto> salvar(@RequestBody @Valid UsuarioForm usuarioForm, UriComponentsBuilder uriBuilder) {
		
		Usuario usuario = usuarioForm.converter(enderecoRepository, pessoaRepository);
		
		usuarioRepository.save(usuario); 
		
		URI uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(usuario.getUserId()).toUri(); 
		return ResponseEntity.created(uri).body(new UsuarioDto(usuario)); 
	}
	
	@CrossOrigin
	@PutMapping("/{userId}")
	@Transactional
	public ResponseEntity<UsuarioDto> alterar(@PathVariable int userId, @RequestBody AlterarUsuarioForm alterarSenhaForm){
		
		Usuario usuario = alterarSenhaForm.alterar(userId, usuarioRepository);
		
		return ResponseEntity.ok(new UsuarioDto(usuario));
	}
	
	@CrossOrigin
	@DeleteMapping("/{userId}")
	@Transactional
	public ResponseEntity<?> deletarUsuario(@PathVariable int userId) {
		
		Usuario usuario = usuarioRepository.findById(userId);
		if (usuario != null) {
			usuarioRepository.deleteById(userId);
			return ResponseEntity.ok().build();			
		}
		
		return ResponseEntity.notFound().build();
	}
}
