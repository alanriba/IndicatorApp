/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {UseIndicatorChart} from '../core/hooks/UseIndicatorChart';
import {IndicatorObject} from '../core/interfaces/IndicatorInterfaces';

export const ChartsComponent = ({codeId}: string) => {
  const {indicators} = UseIndicatorChart(codeId);
  TODO: 'Corregir el gráfico';

  return (
    <View style={{marginHorizontal: 20, marginTop: 40}}>
      <LineChart
        data={{
          labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={320}
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 2,
          color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'red',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};
