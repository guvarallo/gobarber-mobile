import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />

      <Title>Sign in below</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />

      <Button onPress={() => console.log('oi')}>Enter</Button>
    </Container>
  );
};

export default SignIn;
