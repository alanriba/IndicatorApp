import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ChartsComponent} from '../components/ChartComponent';
import {IndicatorDetailComponent} from '../components/IndicatorDetailsComponent';

export const DetailsIndicatorScreen = ({navigator, route}) => {
  const {indicator} = route.params;

  return (
    <View style={styles.page}>
      <View style={styles.headContainer}>
        <View style={styles.humContainer}>
          <Text style={styles.btnText}>{indicator.codigo.toUpperCase()}</Text>
          <Text style={styles.btnText}>${indicator.valor}</Text>
        </View>
      </View>
      <ChartsComponent codeId={indicator.codigo} />

      <View style={styles.bottomCard}>
        <IndicatorDetailComponent itemIndicator={indicator} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  headContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 40,
  },
  humContainer: {
    width: '50%',
  },
  hum: {
    marginTop: -20,
    marginLeft: 5,
  },
  profileContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 110,
  },
  optionCol: {
    backgroundColor: '#000',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  textLinear: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  reloadContainer: {
    backgroundColor: '#FFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    elevation: 3,
  },
  bottomCard: {
    backgroundColor: '#063b71',
    height: 220,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomCol: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  textSymptoms: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  button: {
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 5,
  },
  btnText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
