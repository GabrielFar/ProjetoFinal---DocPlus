import { Prontuario } from "./prontuario";
import { Usuario } from "./usuario";

export interface Agendamento{
    id: number,
    medico: Usuario,
    paciente: Usuario,
    prontuario: Prontuario,
    ano: string,
    mes: string,
    dia: string,
    horario: string
}