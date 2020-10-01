import React, { useState } from 'react';
import {ActivityIndicator, Alert} from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Formik } from 'formik';

import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { TextHighlight } from '../../components/TextHighlight';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container } from './styles';

import api from '../../services/api';

export default function Register({ navigation }) {
  const popAction = StackActions.pop(1);
  const [loading, setLoading] = useState(false);

  const createAlertUser = () =>
    Alert.alert(
      "Ops...",
      "Parece que esse e-mail já esta sendo usado, por favor tente novamente",
      [
        { text: "OK", onPress: () => console.log("OK") }
      ],
      { cancelable: false }
    );

  const createRegisterCongratulations = () =>
    Alert.alert(
      "Parabéns",
      "Estamos muito feliz por ter se cadastrado, vamos ao Login!",
      [
        { text: "Ir agora", onPress: () =>  navigation.dispatch(popAction) }
      ],
      { cancelable: false }
    );

  const createTermsAndConditions = () => 
    Alert.alert(
      "Termos e Condições",
      "Aqui vai os Termos e Condições ...",
      [
        { text: "OK" }
      ],
      { cancelable: false }
    );

  async function createAccount(values) {
    const response = await api.post('/user', values)

    const { status } = response.data;
    console.log(status);

    if (response.data.status == 400) {
      createAlertUser();
      return
    } 
    
    createRegisterCongratulations();
  }

  return (
    <Container>
      <Title>Criar nova conta</Title>
      
      <Formik
        initialValues={{ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '', 
          password: '' 
        }}
        onSubmit={(values, {resetForm}) => {
          setLoading(true);
          createAccount(values);
          setLoading(false);
          resetForm({values: ''});
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (<>
          <FormComponent style={{ marginTop: '8%' }} behavior="height">
            
            <Label>Nome</Label>
            <Input
              placeholder='Nome'
              placeholderTextcolor='#999'
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
            />
            <Label>Sobrenome</Label>
            <Input
              placeholder='Sobrenome'
              placeholderTextcolor='#999'
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            <Label>Email</Label>
            <Input
              placeholder='Seu e-mail'
              placeholderTextcolor='#999'
              autoCapitalize='none'
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Label>Telefone</Label>
            <Input
              placeholder='Seu telefone'
              placeholderTextcolor='#999'
              keyboardType='number-pad'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            <Label>Senha</Label>
            <Input
              placeholder='Sua nova senha'
              placeholderTextcolor='#999'
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </FormComponent>
          <Button
            onPress={handleSubmit}
            primary
            style={{ marginBottom: '10%' }}>
            {
              loading? 
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
      <SubTitle secondary >
        Ao confirmar eu aceito os
      <TextHighlight onPress={() => createTermsAndConditions()}> Termos e Condições</TextHighlight> </SubTitle>
    </Container>
  );
}

