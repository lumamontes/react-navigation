// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Products from './src/pages/products';
import Categories from './src/pages/categories';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        />
        <Stack.Screen name="Produto" component={Products} />
        <Stack.Screen name="Categoria" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;