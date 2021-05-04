import {useEffect, useState} from 'react';
import {IndicatorApi} from '../../general/indicatoApi';
import {
  IndicatorObject,
  IndicatorResponse,
} from '../interfaces/IndicatorInterfaces';

export const UseIndicator = () => {
  const pageUrl = 'https://mindicador.cl/api';

  const [indicators, setIndicators] = useState<IndicatorObject[]>([]);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadIndicator = async () => {
    setLoading(true);
    const result = await IndicatorApi.get<IndicatorResponse>(pageUrl);
    mapIndicator(result.data);
  };

  const mapIndicator = (indicatorItem: any) => {
    const iterableItems: IndicatorObject[] = Object.values(indicatorItem);

    const indicatorObj: IndicatorObject[] = iterableItems
      .map(item => {
        if (item.codigo) {
          return item;
        }
      })
      .filter(
        <T,>(v: T): v is Exclude<T, undefined> => typeof v !== 'undefined',
      );
    setIndicators(indicatorObj);
    setLoading(false);
  };

  useEffect(() => {
    loadIndicator();
  }, [loadIndicator]);

  return {
    indicators,
    loading,
  };
};
