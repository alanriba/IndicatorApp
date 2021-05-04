import moment from 'moment';
import {useEffect, useState} from 'react';
import {IndicatorApi} from '../../general/indicatoApi';
import {
  IndicatorDetails,
  IndicatorSerie,
} from '../interfaces/IndicatorDetailsInterfaces';

export const UseIndicatorType = (type: string) => {
  const pageUrl = `https://mindicador.cl/api/${type}`;

  const [indicators, setIndicators] = useState<IndicatorSerie[]>([]);
  const [loading, setLoading] = useState(true);

  const loadIndicator = async () => {
    setLoading(true);
    const result = await IndicatorApi.get<IndicatorDetails[]>(pageUrl);
    mapIndicator(result.data.serie);
  };

  const convertDate = (date: string) => {
    const dt = date ? moment(date).format('YYYY-MM-DD') : null;
    return dt;
  };

  const mapIndicator = (serie: IndicatorSerie[]) => {
    const serieObj: IndicatorSerie[] = serie
      .map(item => {
        item.fecha = convertDate(item.fecha.toString()) ?? '';
        return item;
      })
      .filter(
        <T,>(v: T): v is Exclude<T, undefined> => typeof v !== 'undefined',
      );
    setIndicators(serieObj);
    setLoading(false);
  };

  useEffect(() => {
    loadIndicator();
  }, []);

  return {
    indicators,
    loading,
  };
};
