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

import com.projetoFinal.docPlus.controller.dto.PessoaDto;
import com.projetoFinal.docPlus.controller.form.AlterarPessoaForm;
import com.projetoFinal.docPlus.controller.form.PessoaForm;
import com.projetoFinal.docPlus.model.Pessoa;
import com.projetoFinal.docPlus.repository.PessoaRepository;

@RestController
@RequestMapping("/pessoas")
public class PessoaController {
	
	@Autowired 
	private PessoaRepository pessoaRepository; 
	
	@CrossOrigin
	@GetMapping
	public List<PessoaDto> listar(){
		List<Pessoa> pessoas = pessoaRepository.findAll(); 
		
		return PessoaDto.converter(pessoas); 			
	}
	
	@CrossOrigin
	@GetMapping("/{pessoaId}")
	public ResponseEntity<PessoaDto> selecionarPessoa(@PathVariable int pessoaId) {
		
		Pessoa pessoa = pessoaRepository.findById(pessoaId);
		
		if (pessoa != null) {
			return ResponseEntity.ok(new PessoaDto(pessoa));
		}
		return ResponseEntity.notFound().build();
	}
	
	@CrossOrigin
	@PostMapping
	@Transactional
	public ResponseEntity<PessoaDto> salvar(@RequestBody @Valid PessoaForm pessoaForm, UriComponentsBuilder uriBuilder) {
		
		Pessoa pessoa = pessoaForm.converter();
		
		pessoaRepository.save(pessoa); 
		
		URI uri = uriBuilder.path("/pessoa/{id}").buildAndExpand(pessoa.getId()).toUri(); 
		return ResponseEntity.created(uri).body(new PessoaDto(pessoa)); 
	}
	
	@CrossOrigin
	@PutMapping("/{pessoaId}")
	@Transactional
	public ResponseEntity<PessoaDto> alterar(@PathVariable int pessoaId, @RequestBody AlterarPessoaForm pessoaFom){
		
		Pessoa pessoa = pessoaFom.alterar(pessoaId, pessoaRepository);
		
		return ResponseEntity.ok(new PessoaDto(pessoa));
	}
	
	@CrossOrigin
	@DeleteMapping("/{pessoaId}")
	@Transactional
	public ResponseEntity<?> deletarPessoa(@PathVariable int pessoaId) {
		
		Pessoa pesssoa = pessoaRepository.findById(pessoaId);
		if (pesssoa != null) {
			pessoaRepository.deleteById(pessoaId);
			return ResponseEntity.ok().build();			
		}
		
		return ResponseEntity.notFound().build();
	}
}
