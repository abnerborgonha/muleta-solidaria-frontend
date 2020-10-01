import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { TextHighlight } from '../../components/TextHighlight';
import { InputValidade } from './InputValidate';
import { Container } from './styles';

import ForgotPasswordContext from '../../context/forgotPasswordContext';

export default function ForgotPassword({ navigation }) {
  const [token, setToken] = useState('');
  const { email, checkToken } = useContext(ForgotPasswordContext);
  const popAction = StackActions.pop(1);

  async function handleSubmit() {
    if (token) {
      console.log(token);
      checkToken(token);
      navigation.navigate('CreateNewPassword');
    }
  }

  return (
    <Container>
      <View style={{ margin: '5%' }}>
        <Title>Vefique seu email, para receber o código</Title>
          <SubTitle style={{ margin: '10%', color: '#1190CB'}}>
            {email}
          </SubTitle>

        <SubTitle>
          Informe o código de 4 digitos para validarmos sua senha.
        </SubTitle>
      </View>

      <FormComponent>
        <Input
          code
          keyboardType="name-phone-pad"
          maxLength={4}
          textAlign={'center'}
          placeholder="Seu código aqui"
          value={token}
          onChangeText={setToken}
        />
      </FormComponent>
      <Button
        onPress={() => handleSubmit()}
        primary
        style={{ marginBottom: '10%' }}>
        <ButtonText primary>Confirmar</ButtonText>
      </Button>

      <Button onPress={() => navigation.dispatch(popAction)}>
        <ButtonText>Voltar</ButtonText>
      </Button>
    </Container>
  );
}

