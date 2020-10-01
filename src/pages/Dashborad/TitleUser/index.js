import React, { useState, useEffect } from 'react';

import { Title } from '../../../components/Title';
import { Container } from './styles';


const TitleUser = ({ firstName }) => {

  return (
    <Container>
      <Title light >{`Olá, ${firstName}`}</Title>
    </Container>
  );
}

export default TitleUser;