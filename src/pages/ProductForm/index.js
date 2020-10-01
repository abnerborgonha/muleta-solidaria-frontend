import React, { useState, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { StackActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Formik } from 'formik';

import { BtnBack } from '../ProductCategory/styles';
import ProductModalContext from '../../context/productModalContext';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container } from './styles';

function ProductForm({ navigation }) {
    const { categories } = useContext(ProductModalContext);
    const popAction = StackActions.pop(1);
    const [selectedValue, setSelectedValue] = useState();
    const [loading, setLoading] = useState(false);


    return (
        <Container>
            <BtnBack onPress={() => { navigation.dispatch(popAction) }}>
                <FontAwesome5
                    name="arrow-left"
                    size={20}
                    color="#000"
                />
            </BtnBack>

            <Formik
                initialValues={{
                    category: '',
                    name: '',
                    amount: '',
                    height: '',
                    widith: '',
                    weight: '',
                    ageRange: false,
                }}
                onSubmit={(values, { resetForm }) => {
                    setLoading(true);
                    createAccount(values);
                    setLoading(false);
                    resetForm({ values: '' });
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (<>
                    <FormComponent style={{ marginTop: '8%' }} behavior="height">

                        <Label>Categoria</Label>
                        <Input
                            placeholder='Categoria'
                            placeholderTextcolor='#999'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Label>Nome</Label>
                        <Input
                            placeholder='Nome do seu produto'
                            placeholderTextcolor='#999'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Label>Quant</Label>
                        <Input
                            placeholder=''
                            placeholderTextcolor='#999'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            value={values.amount}
                        />
                        <Label>Altura</Label>
                        <Input
                            placeholder=''
                            placeholderTextcolor='#999'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            onChangeText={handleChange('height')}
                            onBlur={handleBlur('height')}
                            value={values.height}
                        />
                        <Label>Largura</Label>
                        <Input
                            placeholder=''
                            placeholderTextcolor='#999'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            onChangeText={handleChange('widith')}
                            onBlur={handleBlur('widith')}
                            value={values.widith}
                        />
                        <Label>Peso</Label>
                        <Input
                            placeholder=''
                            placeholderTextcolor='#999'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            onChangeText={handleChange('weight')}
                            onBlur={handleBlur('weight')}
                            value={values.weight}
                        />
                    </FormComponent>
                    <Button
                        onPress={handleSubmit}
                        primary
                        style={{ marginBottom: '10%' }}>
                        {
                            loading ?
                                <ActivityIndicator
                                    size="large"
                                    color="#fff"
                                />
                                :
                                <ButtonText primary>
                                    Confirmar
                                </ButtonText>
                        }
                    </Button>
                </>)}
            </Formik>
        </Container>

    );
}

export default ProductForm;