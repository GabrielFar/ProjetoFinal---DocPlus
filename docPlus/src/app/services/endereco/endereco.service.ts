import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from 'src/app/interaface/endereco';
import { EnderecoDto } from 'src/app/interaface/enderecoDto';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url:string = "http://localhost:8080/enderecos"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Obtem todos os Enderecos 
  getEnderecos(): Observable<EnderecoDto[]> {
    return this.httpClient.get<Endereco[]>(this.url)
  }

  //Obtem todos od dados dos Enderecos 
  getDadosEnderecos(): Observable<EnderecoDto[]> {
    return this.httpClient.get<Endereco[]>(this.url + "/dados")
  }


  //Obtem um Endereco pelo ID
  getEnderecoById(userId: string): Observable<EnderecoDto>{
    return this.httpClient.get<Endereco>(this.url + "/" + userId)
  }

  //Salva um Endereco 
  saveEndereco(endereco: Endereco): Observable<EnderecoDto>{
    return this.httpClient.post<Endereco>(this.url, JSON.stringify(endereco), this.httpOptions)
  }

  //Atualiza um Endereco 
  updateEndereco(endereco: Endereco): Observable<EnderecoDto>{
    return this.httpClient.put<Endereco>(this.url + "/" + endereco.id, JSON.stringify(endereco), this.httpOptions)
  }

  //Delete um Endereco
  deleteEndereco(endereco: Endereco){
    return this.httpClient.delete<Endereco>(this.url + "/" + endereco.id, this.httpOptions)
  }
}
