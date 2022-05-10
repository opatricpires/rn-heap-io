import React from 'react';
import {Text, View} from 'react-native';
import {Heading} from '../../components/Heading';

import {styles} from './styles';

interface HomeProps {
  navigation: any;
}

export function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Heading navigation={navigation} route="Details" buttonText="Details" />
    </View>
  );
}
