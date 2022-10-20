import { Prontuario } from "./prontuario";
import { Usuario } from "./usuario";

export interface Agendamento{
    id: number,
    ano: string,
    dia: string,
    horario: string,
    mes: string,
    medico: Usuario,
    paciente: Usuario,
    prontuario: Prontuario
}