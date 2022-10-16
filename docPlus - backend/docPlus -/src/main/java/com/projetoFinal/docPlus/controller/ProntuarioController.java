package com.projetoFinal.docPlus.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.projetoFinal.docPlus.controller.dto.ProntuarioDto;
import com.projetoFinal.docPlus.controller.form.AlterarProntuarioForm;
import com.projetoFinal.docPlus.controller.form.ProntuarioForm;
import com.projetoFinal.docPlus.model.Prontuario;
import com.projetoFinal.docPlus.repository.ProntuarioRepository;

@RestController
@RequestMapping("/prontuarios")
public class ProntuarioController {
	
	@Autowired
	private ProntuarioRepository prontuariorepository;
	
	@GetMapping
	public List<ProntuarioDto> listar(){
		
		List<Prontuario> prontuarios = prontuariorepository.findAll(); 
		
		return ProntuarioDto.converter(prontuarios); 	
	}
	
	@GetMapping("/{prontuarioId}")
	public ResponseEntity<ProntuarioDto> selecionarProntuario(@PathVariable int prontuarioId) {
		
		Prontuario prontuario = prontuariorepository.findById(prontuarioId);
		
		if (prontuario != null) {
			return ResponseEntity.ok(new ProntuarioDto(prontuario));
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<ProntuarioDto> salvar(@RequestBody @Valid ProntuarioForm prontuarioForm, UriComponentsBuilder uriBuilder) {
		
		Prontuario prontuario = prontuarioForm.converter();
		
		prontuariorepository.save(prontuario); 
		
		URI uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(prontuario.getId()).toUri(); 
		return ResponseEntity.created(uri).body(new ProntuarioDto(prontuario)); 
	}
	
	@PutMapping("/{prontuarioId}")
	@Transactional
	public ResponseEntity<ProntuarioDto> alterar(@PathVariable int prontuarioId, @RequestBody AlterarProntuarioForm alterarProntuario){
		
		Prontuario prontuario = alterarProntuario.alterar(prontuarioId, prontuariorepository);
		
		return ResponseEntity.ok(new ProntuarioDto(prontuario));
	}
	
	@DeleteMapping("/{prontuarioId}")
	@Transactional
	public ResponseEntity<?> deletarPontuario(@PathVariable int prontuarioId) {
		
		Prontuario prontuario = prontuariorepository.findById(prontuarioId);
		if (prontuario != null) {
			prontuariorepository.deleteById(prontuarioId);
			return ResponseEntity.ok().build();			
		}
		
		return ResponseEntity.notFound().build();
	}
}
