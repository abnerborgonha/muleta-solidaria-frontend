import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background: #ededed;
`;

export const ContendFilter = styled.View`
  height: 5%;
  margin: 10px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  background: #2357DC;
  padding: 15px;
  justify-content: center;
  margin-left: 8px;
  border-radius: 5px;

`;

export const TextFilter = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const CardProdutc = styled.View`
  padding: 8%;
  background: #fff;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5px;
  border-radius: 15px;
  flex-direction: row;
`;

export const CardContent = styled.View`
  flex-direction: column;
`;

export const CardArrowIcon = styled.View`
  margin: 10px;
  left: 35%;
`;

export const Image = styled.Image`
  border-radius: 5px;
  width: 25%;
  height: auto;
`;

export const CardText = styled.Text`
  font-size: ${props => props.highlight ? '14px' : '12px'};;
  font-weight: ${props => props.highlight ? 'bold' : 'normal'};
  color: ${props => props.highlight ? '#1190CB' : '#737373'};
  margin-bottom: ${props => props.highlight ? '10%' : '0%'};
`;