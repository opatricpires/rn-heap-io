import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function Heading({navigation, route, buttonText}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route)}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}
