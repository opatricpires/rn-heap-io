import React from 'react';
import {Text, View} from 'react-native';
import {Heading} from '../../components/Heading';

import {styles} from './styles';

export function Details({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Heading navigation={navigation} route="Home" buttonText="Home" />
    </View>
  );
}
