import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {IndicatorObject} from '../core/interfaces/IndicatorInterfaces';

interface Props {
  itemIndicator: IndicatorObject;
}

export const IndicatorDetailComponent = ({itemIndicator}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nombre</Text>
        <Text style={styles.regularText}> {itemIndicator.nombre}</Text>
        <Text style={styles.title}>Fecha</Text>
        <Text style={styles.regularText}>
          {moment(itemIndicator.fecha).format('DD-MM-YYYY')}
        </Text>
        <Text style={styles.title}>Unidad Medida</Text>
        <Text style={styles.regularText}> {itemIndicator.unidad_medida}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'white',
  },
  regularText: {
    fontSize: 18,
    color: '#a5a1a6',
  },
});
