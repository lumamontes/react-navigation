import * as React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LottieView
                style={{
                    width: 400,
                    height: 400,
                    backgroundColor: '#eee',
                }}
                source={require('../../../assets/69336-add-product.json')}
                autoPlay={true} loop={true}
            />
            <TouchableOpacity style={styles.button} title="Cadastrar categoria" onPress={() => navigation.navigate('Produto')} >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Cadastrar produto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="Cadastrar categoria" onPress={() => navigation.navigate('Categoria')} >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Cadastrar categoria</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#7ea4e5',
        padding: 20,
        marginBottom: 3,
        width: "90%",
        borderRadius: 6,
    },
});
