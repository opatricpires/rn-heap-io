import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/Home';
import {Details} from './src/pages/Details';
import Heap from '@heap/react-native-heap';

const Stack = createNativeStackNavigator();

const HeapNavigationContainer =
  Heap.withReactNavigationAutotrack(NavigationContainer);

const App = () => {
  return (
    <HeapNavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </HeapNavigationContainer>
  );
};

export default App;
