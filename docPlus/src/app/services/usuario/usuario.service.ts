import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interaface/usuario';
import { UsuarioDto } from 'src/app/interaface/usuarioDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string = "http://localhost:8080/usuarios"

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Obtem todos os Usuarios 
  getUsuarios(): Observable<UsuarioDto[]> {
    return this.httpClient.get<Usuario[]>(this.url)
  }

  //Obtem todos dados dos Usuarios 
  getDadosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url + "/dados")
  }

  //Obtem um Usuario pelo ID
  getUsuarioById(userId: string): Observable<UsuarioDto>{
    return this.httpClient.get<Usuario>(this.url + "/" + userId)
  }

  //Salva um Usuario 
  saveUsuario(usuario: Usuario): Observable<UsuarioDto>{
    return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions)
  }

  //Atualiza um Usuario 
  updateUsuario(usuario: Usuario): Observable<UsuarioDto>{
    return this.httpClient.put<Usuario>(this.url + "/" + usuario.userId, JSON.stringify(usuario), this.httpOptions)
  }

  //Delete um Usuario
  deleteUsuario(userId: number){
    return this.httpClient.delete<Usuario>(this.url + "/" + userId, this.httpOptions)
  }
}
