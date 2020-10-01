import React, {useState, useContext}  from 'react';
import { View } from 'react-native';
import { StackActions } from '@react-navigation/native';

import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container } from './styles';

import  ForgotPasswordContext from '../../context/forgotPasswordContext';

export default function ForgotPassword ({ navigation }) {
  const { sendEmailToken } = useContext(ForgotPasswordContext);
  const [email, setEmail] = useState('');
  const popAction = StackActions.pop(1);

  async function handleSubmit() {
    if (email) {
      console.log(email);
      sendEmailToken(email);
      navigation.navigate('ValidatePassword');
    }
  }

  return (
    <Container>
      <View style={{margin: '10%'}}>
       <Title>Esqueceu a senha?</Title>
        <SubTitle>
          Não se preocupe, informe seu email para que possamos recuperar
        </SubTitle>
      </View>
      
      <FormComponent>
        <Label>Email</Label>
        <Input
          placeholder='Seu e-mail'
          placeholderTextcolor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          style={{marginBottom: '20%'}}
          value={email}
          onChangeText={setEmail}
        />
      </FormComponent>
      <Button 
        onPress={() => handleSubmit()}
        primary 
        style={{marginBottom: '10%'}}>
        <ButtonText primary>Confirmar</ButtonText>
      </Button>

      <Button onPress={() => navigation.dispatch(popAction)}>
        <ButtonText>Voltar</ButtonText>
      </Button>
    </Container>
  );
}

