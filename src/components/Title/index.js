import styled from 'styled-components/native';

export const Title = styled.Text`
  color:  ${props => (props.light ? '#fff' : '#000')};
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;