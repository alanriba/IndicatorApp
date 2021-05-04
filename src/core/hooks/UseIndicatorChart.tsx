import moment from 'moment';
import {useEffect, useState} from 'react';
import {IndicatorApi} from '../../general/indicatoApi';
import {ChartIndicator} from '../interfaces/chartIndicatorInterfaces';
import {
  IndicatorDetails,
  IndicatorSerie,
} from '../interfaces/IndicatorDetailsInterfaces';

export const UseIndicatorChart = (type: string) => {
  const pageUrl = `https://mindicador.cl/api/${type}`;

  const [indicators, setIndicators] = useState<IndicatorSerie[]>([]);


  const loadIndicator = async () => {
    const result = await IndicatorApi.get<IndicatorDetails[]>(pageUrl);
    mapIndicator(result.data.serie);
  };

  const convertDate = (date: string) => {
    const dt = date ? moment(date).format('YYYY-MM-DD') : null;
    return dt;
  };

  const mapIndicator = (serie: IndicatorSerie[]) => {
    const serieObj: IndicatorSerie[] = serie
      .slice(0, 10)
      .map(item => {
        item.fecha = convertDate(item.fecha.toString()) ?? '';
        return {item};
      })
      .filter(
        <T,>(v: T): v is Exclude<T, undefined> => typeof v !== 'undefined',
      );
    setIndicators(serieObj);
  };

  useEffect(() => {
    loadIndicator();
  }, []);

  return {
    indicators,
  };
};
