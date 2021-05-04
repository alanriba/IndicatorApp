import * as React from 'react';
import {FlatList, Image, Text} from 'react-native';
import {List} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../assets/theme/appTheme';
import {ListComponent} from '../components/ListItemComponent';
import {UseIndicator} from '../core/hooks/UseIndicator';

export const DetailsIndicatorScreen = () => {
  const {top} = useSafeAreaInsets();

 
  return (
    <>


      <Text style={{...styles.title, top: top + 20}}>
        Indicadores Económicos
      </Text>


    </>
  );
};
