import React from 'react';
import {Text, View} from 'react-native';
import {Heading} from '../../components/Heading';

import {styles} from './styles';

export function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Heading navigation={navigation} route="Details" buttonText="Details" />
    </View>
  );
}
