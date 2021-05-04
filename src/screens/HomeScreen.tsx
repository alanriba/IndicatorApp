import * as React from 'react';
import {FlatList, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../assets/theme/appTheme';
import {ListComponent} from '../components/ListItemComponent';
import {UseIndicator} from '../core/hooks/UseIndicator';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {indicators} = UseIndicator();

  return (
    <>
      <Image
        source={require('../assets/img/finantial.png')}
        style={styles.iconBackgorund}
      />

      <Text
        style={{
          ...styles.title,
          top: top + 20,
        }}>
        Indicadores Económicos
      </Text>

      <FlatList
        data={indicators}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={key => key.codigo}
        renderItem={({item}) => <ListComponent itemIndicator={item} />}
      />
    </>
  );
};
