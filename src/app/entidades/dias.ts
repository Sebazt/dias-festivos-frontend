import { Tipo } from "./tipo";

export class Dias {
  id: number;
  nombre: string;
  dia: number;
  mes: number;
  diasPascua: number;
  tipo: Tipo;
  fecha: Date;

  constructor(
    id: number,
    nombre: string,
    dia: number,
    mes: number,
    diasPascua: number,
    tipo: Tipo,
    fecha: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.diasPascua = diasPascua;
    this.tipo = tipo;
    this.fecha = fecha;
  }
}

