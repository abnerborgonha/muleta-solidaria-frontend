import styled from 'styled-components/native';

export const Picker = styled.Picker`
  width: ${props => (props.half ? '100%' : '90%')};
  height: 45px;
  padding-left: ${props => (props.code ? '0px' : '20px')};
  border-radius: 5px;
  background-color: #E9E9E9;
  font-size: 16px;
  border-width: 1px;
  border-color: #bbb;
  margin-bottom: 18px;
`;