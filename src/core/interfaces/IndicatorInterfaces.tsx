
export interface IndicatorResponse {
  version: string;
  autor: string;
  fecha: string;
  result: IndicatorValueObject;
}

export interface IndicatorObject {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

export interface IndicatorValueObject {
  codigo: IndicatorObject;
  unidad_medida: string;
}
