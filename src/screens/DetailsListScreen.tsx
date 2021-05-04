import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {View} from 'react-native';
import {Image, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../assets/theme/appTheme';
import {ListValueComponent} from '../components/ListItemValueComponent';
import {UseIndicatorType} from '../core/hooks/UseIndicatorType';
import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams> {}

export const DetailsListScreen = ({route}: Props) => {
  const {top} = useSafeAreaInsets();

  const {codeId, itemName} = route.params;
  const {indicators} = UseIndicatorType(codeId);
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/img/finantial.png')}
        style={styles.iconBackgorund}
      />

      <Text style={{...styles.title, top: top + 20}}>{itemName}</Text>

      <FlatList
        data={indicators}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={key => key.fecha}
        renderItem={({item}) => <ListValueComponent itemIndicator={item} />}
      />
    </View>
  );
};
