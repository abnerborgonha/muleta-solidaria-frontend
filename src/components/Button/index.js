
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 45px;
  border-radius: 5px; 
  border-width: 2px;  
  background-color: ${props => (props.primary ? '#1190CB' : '#fff')};
  border-color: ${props => (props.primary ? '#ffffff' : '#1190CB')};
  justify-content: center;
  align-items: center;
`;


