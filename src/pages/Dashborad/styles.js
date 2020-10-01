import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color:#1190CB;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const ContendUser = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 12%;
  margin-bottom: 12%;
`;
export const ContendUserAnimated = Animatable.createAnimatableComponent(ContendUser);

export const Icon = styled.Image`
  width: 35%;
  height: 25%;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  color:  ${props => (props.highlight ? '#1190CB' : '#000')};
  text-align: center;
  font-size:  ${props => (props.large ? '18px' : '16px')};;
  font-weight: ${props => (props.highlight ? 'bold' : 'normal')};
  font-weight: bold;
`;

export const Indicator = styled.Text`
  color:  ${props => (props.light ? '#fff' : '#000')};
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
