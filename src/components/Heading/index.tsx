import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

interface HeadingProps {
  route: string;
  buttonText: string;
  navigation: any;
}

export function Heading({navigation, route, buttonText}: HeadingProps) {
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
