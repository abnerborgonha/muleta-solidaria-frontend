import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const TextHighlight = styled.Text`
  color: #1190CB;
  font-size: ${props => props.lg? '22px': '12px'};
  font-weight: bold;
`;

export const TextHighlightAnimed = Animatable.createAnimatableComponent(TextHighlight);