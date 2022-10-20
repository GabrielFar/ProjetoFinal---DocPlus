import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/interaface/agendamento';
import { AgendamentoDto } from 'src/app/interaface/agendametoDto';
import { AgendamentoPost } from 'src/app/interaface/agendamentoPost';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  
  url:string = "http://localhost:8080/agendamentos"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Obtem todos os Agendamentos 
  getAgendamentos(): Observable<AgendamentoDto[]> {
    return this.httpClient.get<Agendamento[]>(this.url)
  }

  //Obtem todos os Agendamentos e o nome dos Pacientes
  getNomesAgendamento(nomeMedico: string): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.url + "/nomes/" + nomeMedico)
  }

  //Obtem todos os Agendamentos e o nome dos Pacientes
  getNomesPorPaciente(nomePaciente: string): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.url + "/nomesPaciente/" + nomePaciente)
  }

  //Obtem um Agendamento pelo ID
  getAgendamentoById(userId: string): Observable<AgendamentoDto>{
    return this.httpClient.get<Agendamento>(this.url + "/" + userId)
  }

  //Salva um Agendamento 
  saveAgendamento(agendamento: AgendamentoPost): Observable<AgendamentoDto>{
    return this.httpClient.post<Agendamento>(this.url, JSON.stringify(agendamento), this.httpOptions)
  }

  //Atualiza um Agendamento 
  updateAgendamento(agendamento: Agendamento): Observable<AgendamentoDto>{
    return this.httpClient.put<Agendamento>(this.url + "/" + agendamento.id, JSON.stringify(agendamento), this.httpOptions)
  }

  //Delete um Agendamento
  deleteAgendamento(agendamento: Agendamento){
    return this.httpClient.delete<Agendamento>(this.url + "/" + agendamento.id, this.httpOptions)
  }
}
