import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IndicatorObject} from '../core/interfaces/IndicatorInterfaces';

interface Props {
  itemIndicator: IndicatorObject;
}

export const ListComponent = ({itemIndicator}: Props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={() =>
        navigation.navigate('DetailsListScreen', {
          codeId: itemIndicator.codigo,
          itemName: itemIndicator.nombre,
        })
      }>
      <List.Item
        title={itemIndicator.nombre}
        description={itemIndicator.unidad_medida}
        left={() => <Ionicons name="analytics" size={42} />}
        right={() => <Ionicons name="information-circle-outline" size={42} />}
      />
    </TouchableOpacity>
  );
};
