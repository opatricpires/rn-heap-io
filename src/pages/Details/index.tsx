import React from 'react';
import {Text, View} from 'react-native';
import {Heading} from '../../components/Heading';

import {styles} from './styles';

interface DetailsProps {
  navigation: any;
}

export function Details({navigation}: DetailsProps) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Heading navigation={navigation} route="Home" buttonText="Home" />
    </View>
  );
}
