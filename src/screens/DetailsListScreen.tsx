import * as React from 'react';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../assets/theme/appTheme';

export const DetailsListScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <>
      <Text style={{...styles.title, top: top + 20}}>
        Indicadores Económicos
      </Text>
    </>
  );
};
