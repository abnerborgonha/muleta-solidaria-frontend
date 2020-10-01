import styled from 'styled-components/native';

export const SubTitle = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${props => props.secondary? '12px': '18px'};
  font-weight: ${props => props.secondary? 'bold': '100'};

`;