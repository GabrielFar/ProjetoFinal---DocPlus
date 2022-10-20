import { Endereco } from "./endereco";
import { Pessoa } from "./pessoa";

export interface Usuario {
    userId: number, 
    senha: string,
    tipo: string,
    pessoa: Pessoa,
    endereco: Endereco
}