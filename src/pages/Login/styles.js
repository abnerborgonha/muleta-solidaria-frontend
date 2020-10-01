import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width:  ${props => (props.width * 0.40)};
  height: ${props => (props.height * 0.40)};
`;


