import React, { useContext } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Avatar } from 'react-native-elements';
import UserContext from '../../context/userContext';

import backgoundImage from '../../../assets/background.png';
import avatar from '../../../assets/profile.png';
import patientIcon from '../../../assets/patient.png';
import crutchIcon from '../../../assets/crutch.png';
import mapImage from '../../../assets/map.png';

import {
  Container,
  ImageBackground,
  ContendUser,
  ContendUserAnimated,
  Icon,
  Title,
  Indicator
} from './styles';
import { ContendCard, CardLargeAnimated, CardAnimated } from '../../components/Card';
import TitleUser from './TitleUser';


const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

const Dashborad = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <StatusBar style='light' />
      <ImageBackground
        source={backgoundImage}
      >
        <ContendUserAnimated
           animation='fadeInLeft'
           useNativeDriver
           duration={1000}
        >
          <TitleUser firstName={user.firstName} />
          <Avatar
            rounded
            size={64}
            source={{
              uri:
                `http://192.168.1.106:3333/files/${user.profile_image_url}`,
            }}
            activeOpacity={0.7}
            chevron
            title={`${user.firstName[0]}${user.lastName[0]}`}
          />
        </ContendUserAnimated>
        <ContendCard>
            <CardAnimated
              animation='fadeInUp'
              useNativeDriver
              duration={1000}
              style={shadow}>
              <Icon source={patientIcon} />
              <Title style={{ color: '#3F3F3F' }}>Ativos</Title>
              <Indicator>105</Indicator>
            </CardAnimated>
          <CardAnimated 
            animation='fadeInUp'
            useNativeDriver
            duration={1000}
            style={shadow}>
            <Icon source={crutchIcon} />
            <Title style={{ color: '#3F3F3F' }}>Totais</Title>
            <Indicator>245</Indicator>
          </CardAnimated>
        </ContendCard>
        <CardLargeAnimated 
          animation='fadeInUp'
          useNativeDriver
          duration={1500}
          style={shadow}>
          <Title large >Produtos mais usados ativos:</Title>
          <Title highlight large >Cadeira de Rodas</Title>
          <Indicator>60</Indicator>
        </CardLargeAnimated>
      </ImageBackground>
    </Container>
  );
}

export default Dashborad;