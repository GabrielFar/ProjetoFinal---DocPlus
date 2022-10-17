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

import com.projetoFinal.docPlus.controller.dto.EnderecoDto;
import com.projetoFinal.docPlus.controller.form.AlterarEnderecoForm;
import com.projetoFinal.docPlus.controller.form.EnderecoForm;
import com.projetoFinal.docPlus.model.Endereco;
import com.projetoFinal.docPlus.repository.EnderecoRepository;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@GetMapping
	public List<EnderecoDto> listar(){
		
		List<Endereco> enderecos = enderecoRepository.findAll(); 
		
		return EnderecoDto.converter(enderecos); 	
	}
	
	@GetMapping("/{enderecoId}")
	public ResponseEntity<EnderecoDto> selecionarEndereco(@PathVariable int enderecoId) {
		
		Endereco endereco = enderecoRepository.findById(enderecoId);
		
		if (endereco != null) {
			return ResponseEntity.ok(new EnderecoDto(endereco));
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<EnderecoDto> salvar(@RequestBody @Valid EnderecoForm enderecoForm, UriComponentsBuilder uriBuilder) {
		
		Endereco endereco = enderecoForm.converter();
		
		enderecoRepository.save(endereco); 
		
		URI uri = uriBuilder.path("/endereco/{id}").buildAndExpand(endereco.getId()).toUri(); 
		return ResponseEntity.created(uri).body(new EnderecoDto(endereco)); 
	}
	
	@PutMapping("/{enderecoId}")
	@Transactional
	public ResponseEntity<EnderecoDto> alterar(@PathVariable int enderecoId, @RequestBody AlterarEnderecoForm enderecoFom){
		
		Endereco endereco = enderecoFom.alterar(enderecoId, enderecoRepository);
		
		return ResponseEntity.ok(new EnderecoDto(endereco));
	}
	
	@DeleteMapping("/{enderecoId}")
	@Transactional
	public ResponseEntity<?> deletarEndereco(@PathVariable int enderecoId) {
		
		Endereco endereco = enderecoRepository.findById(enderecoId);
		if (endereco != null) {
			enderecoRepository.deleteById(enderecoId);
			return ResponseEntity.ok().build();			
		}
		
		return ResponseEntity.notFound().build();
	}
}
