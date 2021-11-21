import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Cadastrar produto"
        onPress={() => navigation.navigate('Produto')}
      />
      <Button
        title="Cadastrar categoria"
        onPress={() => navigation.navigate('Categoria')}
      />
    </View>
  );
}