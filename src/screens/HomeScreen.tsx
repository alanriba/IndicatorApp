import * as React from 'react';
import {Image, Text} from 'react-native';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../assets/theme/appTheme';

export const HomeScreen = () => {
  return (
    <>
      <Image
        source={require('../assets/img/finantial.png')}
        style={styles.iconBackgorund}
      />

      <Text style={{...styles.title, marginLeft: 20}}>
        Indicadores Económicos
      </Text>

      <List.Item
        title="First Item"
        description="Item description"
        left={() => <Ionicons name="star-outline" color={'red'} />}
        right={() => (
          <Ionicons name="information-circle-outline" color={'red'} />
        )}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={() => <Ionicons name="star-outline" color={'red'} />}
        right={() => (
          <Ionicons name="information-circle-outline" color={'red'} />
        )}
      />
    </>
  );
};
