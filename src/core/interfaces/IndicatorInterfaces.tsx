// Generated by https://quicktype.io

export interface IndicatorResponse {
  version: string;
  autor: string;
  fecha: string;
  result: ResultObject;
}

export interface IndicatorObject {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

export interface ResultObject {
  codigo: IndicatorObject;
  unidad_medida: string;
}
