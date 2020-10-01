import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;

export const InputMask = styled.TextInput`
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