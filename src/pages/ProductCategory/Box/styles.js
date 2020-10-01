import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const Contend = styled.View`
    margin: 20px;
    background: #fff;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    width: 92%;
`;


export const BtnBackground = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;

export const Btn = styled.TouchableOpacity`
  background: ${props => (props.cancel ? '#1190CB' : '#fff')};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin: 2.5%;
`;
