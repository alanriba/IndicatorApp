export interface IndicatorDetails {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: IndicatorSerie[];
}

export interface IndicatorSerie {
  fecha: string;
  valor: number;
}
