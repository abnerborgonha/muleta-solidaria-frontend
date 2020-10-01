import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #ededed;
`;

export const Header = styled.View`
  padding: 5%;
`;

export const BtnAdd = styled.TouchableOpacity`
  background: #1190CB;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 81.5%;
`;

export const BtnBack = styled.TouchableOpacity`
  background: #fff;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 81.5%;
`;
