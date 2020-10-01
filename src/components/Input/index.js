import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container } from './styles';

const Input = ({ icon, error, children }) => {
  return(
    <Container error={error}>
      {children}
      <MaterialCommunityIcons size={20} name={icon} color="#fff" />
    </Container>
  );
};

export default Input;