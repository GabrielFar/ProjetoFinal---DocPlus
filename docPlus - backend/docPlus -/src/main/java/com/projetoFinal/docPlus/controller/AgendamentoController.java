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

import com.projetoFinal.docPlus.controller.dto.AgendamentoDto;
import com.projetoFinal.docPlus.controller.form.AgendamentoForm;
import com.projetoFinal.docPlus.controller.form.AlterarAgendamentoForm;
import com.projetoFinal.docPlus.model.Agendamento;
import com.projetoFinal.docPlus.model.Usuario;
import com.projetoFinal.docPlus.repository.AgendamentoRepository;
import com.projetoFinal.docPlus.repository.PessoaRepository;
import com.projetoFinal.docPlus.repository.ProntuarioRepository;
import com.projetoFinal.docPlus.repository.UsuarioRepository;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {
	
	@Autowired
	private AgendamentoRepository agendamentoRepository;
	
	@Autowired 
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ProntuarioRepository prontuarioRepository;
	
	@CrossOrigin
	@GetMapping
	public List<AgendamentoDto> listar(){
		
		List<Agendamento> agendamentos = agendamentoRepository.findAll(); 
		
		return AgendamentoDto.converter(agendamentos); 	
	}
	
	@CrossOrigin
	@GetMapping("/nomes/{nomeMedico}")
	public List<Agendamento> pegarAgendaMedica(@PathVariable String nomeMedico){
		
		List<Agendamento> agendamentos = agendamentoRepository.findByMedico_Pessoa_Nome(nomeMedico); 

		return agendamentos; 	
	}
	
	@CrossOrigin
	@GetMapping("/{agendamentoId}")
	public ResponseEntity<AgendamentoDto> selecionarAgendamento(@PathVariable int agendamentoId) {
		
		Agendamento agendamento = agendamentoRepository.findById(agendamentoId);
		
		if (agendamento != null) {
			return ResponseEntity.ok(new AgendamentoDto(agendamento));
		}
		return ResponseEntity.notFound().build();
	}
	
	@CrossOrigin
	@PostMapping
	@Transactional
	public ResponseEntity<AgendamentoDto> salvar(@RequestBody @Valid AgendamentoForm agendamentoForm, UriComponentsBuilder uriBuilder) {
		
		Agendamento agendamento = agendamentoForm.converter(prontuarioRepository, usuarioRepository);
		
		agendamentoRepository.save(agendamento); 
		
		URI uri = uriBuilder.path("/usuarios/{id}").buildAndExpand(agendamento.getId()).toUri(); 
		return ResponseEntity.created(uri).body(new AgendamentoDto(agendamento)); 
	}
	
	@CrossOrigin
	@PutMapping("/{agendamentoId}")
	@Transactional
	public ResponseEntity<AgendamentoDto> alterar(@PathVariable int agendamentoId, @RequestBody AlterarAgendamentoForm alterarAgendamento){
		
		Agendamento agendamento = alterarAgendamento.alterar(agendamentoId, agendamentoRepository);
		
		return ResponseEntity.ok(new AgendamentoDto(agendamento));
	}
	
	@CrossOrigin
	@DeleteMapping("/{agendamentoId}")
	@Transactional
	public ResponseEntity<?> deletarAgendamento(@PathVariable int agendamentoId) {
		
		Agendamento agendamento = agendamentoRepository.findById(agendamentoId);
		if (agendamento != null) {
			agendamentoRepository.deleteById(agendamentoId);
			return ResponseEntity.ok().build();			
		}
		
		return ResponseEntity.notFound().build();
	}
}
