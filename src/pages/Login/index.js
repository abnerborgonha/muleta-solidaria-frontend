import React, { useState, useContext } from 'react';
import { View, Dimensions } from 'react-native';
import UserContext from '../../context/userContext';

import Logo from '../../../assets/logo.png';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { TextHighlight } from '../../components/TextHighlight';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Container, Image } from './styles';

import api from '../../services/api';

export default function Login({ navigation }) {

  const { sessionUser } = useContext(UserContext);
  const width = Dimensions.get('window').width;
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  async function handleSubmit() {
    if (email && password) {


      const response = await api.post('/session', { email, password });

      const { token } = response.data;

      if (token) {
        sessionUser(response.data);

        navigation.navigate('TabNavigation');
      }
    }


    // navigation.navigate('TabNavigation');
  }

  return (
    <Container>
      <Image
        width={width}
        height={width}
        source={Logo}
      />
      <FormComponent>
        <Label>Email</Label>
        <Input
          placeholder='Seu e-mail'
          placeholderTextcolor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Label>Senha</Label>
        <Input
          placeholder='Sua senha'
          placeholderTextcolor='#999'
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={setPassowrd}
        />
        <View style={{ flexDirection: 'row-reverse' }}>
          <TextHighlight
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{ paddingRight: 40 }} >
            Esqueceu a senha?
          </TextHighlight>
        </View>

      </FormComponent>

      <Button primary onPress={handleSubmit}>
        <ButtonText primary>Entrar</ButtonText>
      </Button>

      <TextHighlight style={{ margin: '8%' }}>OU</TextHighlight>

      <Button onPress={() => navigation.navigate('Register')}>
        <ButtonText >Cadastrar</ButtonText>
      </Button>

      <TextHighlight style={{ margin: '5%' }} onPress={() => navigation.navigate('Sing')}>
        Testes
      </TextHighlight>

    </Container>
  );
}

