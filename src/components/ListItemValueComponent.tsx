import React from 'react';
import {List, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../assets/theme/appTheme';
import {IndicatorSerie} from '../core/interfaces/IndicatorDetailsInterfaces';

interface Props {
  itemIndicator: IndicatorSerie;
}

export const ListValueComponent = ({itemIndicator}: Props) => {
  return (
    <List.Item
      title=""
      subTitle=""
      left={() => (
        <>
          <Text>
            <Icon name="calendar" size={26} color="black" />
          </Text>
          <Text style={styles.subTitle}>{itemIndicator.fecha}</Text>
        </>
      )}
      right={() => <Text style={styles.subTitle}>$ {itemIndicator.valor}</Text>}
    />
  );
};
