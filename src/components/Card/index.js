import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';


export const ContendCard = styled.View`
  flex-direction: ${props => (props.hz ? 'column' : 'row')};
  width: 100%;
  justify-content: ${props => (props.hz ? 'center' : 'space-around')};
  margin-bottom: 5%;
`;

export const Card = styled.View`
  width: 40%;
  background: #fff;
  border-radius:15px;
  align-items: center;
  justify-content: center;
`;
export const CardAnimated = Animatable.createAnimatableComponent(Card);

export const CardLarge = styled.View`
  width: 90%;
  background: #fff;
  border-radius:15px;
  align-items: center;
  justify-content: center;
`;
export const CardLargeAnimated = Animatable.createAnimatableComponent(CardLarge);