import React, { useState, useCallback } from 'react';
import { Container, FormContent, Title, Button, ButtonText, TextInput } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input';

const Login = () => {
  const { navigate } = useNavigation();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(() => {
    if(!email || !password) {
      setError(true);

      return;
    }

    setError(false);
    navigate('Home');
  }, [email, password]) 

  return(
    <Container>
      <Title>
        <MaterialCommunityIcons name="apps" size={50} color="#1DB954" />
      </Title>

      <FormContent>
        <Input error={error} icon="email">
          <TextInput onChangeText={value => setEmail(value)} placeholder="Email" placeholderTextColor="#fff" />
        </Input>

        <Input error={error} icon="lock">
          <TextInput onChangeText={value => setPassword(value)} placeholder="Senha" placeholderTextColor="#fff" />
        </Input>
        
        <Button onPress={handleSubmit}>
          <ButtonText>Entrar</ButtonText>
          <MaterialCommunityIcons name="send" color="#fff" size={20} />
        </Button>
      </FormContent>
    </Container>
  );
};

export default Login;