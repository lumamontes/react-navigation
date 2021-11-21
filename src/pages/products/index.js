// In App.js in a new project

import * as React from 'react';
import {
    Button, View, Text, SafeAreaView,
    TextInput, ActivityIndicator, TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required().label('Name'),
    categorie: yup.string().required().label('categorie'),
    value: yup.string().required().label('value'),
});

export default function Products() {
    return (
        <View style={{ flex: 0.6, justifyContent: 'space-around', marginLeft: 10 }}>
            <Text >Cadastro de produtos</Text>
            <Formik
                initialValues={{ name: '', categorie: '', value: '' }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={validationSchema}
            >
                {(formikProps) => (
                    <React.Fragment>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                width: "90%",
                                borderRadius: 10,

                            }}
                            onChangeText={formikProps.handleChange('name')}
                            placeholder='Nome'
                        />
                        <Text style={{ color: 'red' }}>{formikProps.errors.name}</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                width: "90%",
                                borderRadius: 10,

                            }}
                            onChangeText={formikProps.handleChange('categorie')}
                            placeholder='Categoria'
                        />
                        <Text style={{ color: 'red' }}>{formikProps.errors.categorie}</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                width: "90%",
                                borderRadius: 10,

                            }}
                            onChangeText={formikProps.handleChange('value')}
                            placeholder='Preço'
                        />
                        <Text style={{ color: 'red' }}>{formikProps.errors.value}</Text>
                        {formikProps.isSubmitting ? (
                            <ActivityIndicator />
                        ) : (
                                <TouchableOpacity title="Submit" onPress={formikProps.handleSubmit} style={{
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    backgroundColor: '#7ea4e5',
                                    padding: 20,
                                    marginBottom: 3,
                                    width: "90%",
                                    borderRadius: 6,
                                }}>
                                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Cadastrar</Text>
                                </TouchableOpacity>
                            )}
                    </React.Fragment>
                )}
            </Formik>
        </View>
    );
}