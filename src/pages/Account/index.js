import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { Avatar } from 'react-native-elements';
import api from '../../services/api/';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import UserContext from '../../context/userContext';
import { Container, Header } from './styles';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { TextHighlightAnimed } from '../../components/TextHighlight';
import { Contend } from '../Settings/styles';


const Account = () => {
  const [avatar, setAvatar] = useState();
  const { user } = useContext(UserContext);

  console.log(user);

  async function imagePickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        alert("A permissão é obrigatória para o aplicativo poder acessar sua galeria");
        return;
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function cameraPickerCall() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== 'granted') {
        alert("A permissão é obrigatória para o aplicativo poder acessar sua camera");
        return;
      }
    }

    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setAvatar(data);
  }

  async function uploadImage() {
    const data = new FormData();

    data.append('avatar', {
      fileName: avatar.fileName,
      uri: avatar.uri,
      type: avatar.type
    });

  }

  return (
    <Container>
      <Header>
        <Avatar
          rounded
          containerStyle={{borderColor: '#2357DC', borderWidth: 2, padding: 2}}
          size={120}
          source={{
            uri:
              avatar ? avatar.uri :
                `http://192.168.1.106:3333/files/${user.profile_image_url}`,
          }}
          activeOpacity={0.7}
          chevron
          showAccessory
          onAccessoryPress={() => {
            Alert.alert('Alterar foto', '', [
              {
                text: 'Cancelar',
                onPress: () => console.log('Cancel'),
                style: 'destructive'
              },
              {
                text: 'Galeria',
                onPress: () => imagePickerCall()
              },
              {
                text: 'Camêra',
                onPress: () => cameraPickerCall(),
              }

            ])
          }}
        />
        <Title style={{ marginTop: 10 }}>{`${user.firstName} ${user.lastName}`}</Title>
        <SubTitle>{`${user.email}`}</SubTitle>
      </Header>
      <Contend>
        <TextHighlightAnimed
          animation='fadeInLeft'
          delay={250}
          lg
          style={{ marginBottom: 15 }}
        >Alterar meus dados
                </TextHighlightAnimed>
        <TextHighlightAnimed
          animation='fadeInLeft'
          delay={500}
          lg
          style={{ marginBottom: 15 }}
        >Segurança
                </TextHighlightAnimed>
        <TextHighlightAnimed
          animation='fadeInLeft'
          delay={750}
          lg
          style={{ marginBottom: 15 }}
        >Meus anuncios
                </TextHighlightAnimed>
        <TextHighlightAnimed
          animation='fadeInLeft'
          delay={750}
          lg
          style={{ marginBottom: 15 }}
        >Colaboradores
                </TextHighlightAnimed>
      </Contend>
    </Container>
  );
}

export default Account;