import React, {useContext, useState} from 'react';
import { View } from 'react-native';
import { StackActions } from '@react-navigation/native';

import ForgotPasswordContext from '../../context/forgotPasswordContext';

import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { FormComponent } from '../../components/Form';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container } from './styles';

const CreateNewPassword = ({ navigation }) => {
  const { resetPassword } = useContext(ForgotPasswordContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const popAction = StackActions.pop(3);

  async function handleSubmit() {
    await resetPassword(password, confirmPassword);
    navigation.dispatch(popAction);
  }

  return (
    <Container>
      <View style={{ margin: '10%' }}>
        <Title>Vamos criar uma senha nova?</Title>
        <SubTitle>
          Informe sua senha nos campos a baixo e siga em frente :)
        </SubTitle>
      </View>
      <FormComponent>
        <Label>Senha</Label>
        <Input
          placeholder='Sua nova senha'
          placeholderTextcolor='#999'
          secureTextEntry={true}
          autoCapitalize='none'
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />

        <Label>Confirme sua senha</Label>
        <Input
          placeholder='Confirme sua nova senha'
          placeholderTextcolor='#999'
          secureTextEntry={true}
          autoCapitalize='none'
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </FormComponent>
      <Button
        onPress={() => handleSubmit()}
        primary
        style={{ marginBottom: '10%' }}>
        <ButtonText primary>Confirmar</ButtonText>
      </Button>
    </Container>
  );
}

export default CreateNewPassword;