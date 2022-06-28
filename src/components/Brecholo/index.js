import React from 'react';

import { Container, Content, Text, Social, Logo } from './styles';
import BrecholoLogo from '../../assets/brecholo.jpg'
import Insta from '../../assets/instagram.png'

export default function Brecholo() {
  return (
    <Container>
      <Content>
        <Logo>
            <img src={BrecholoLogo} />
        </Logo>
        <Text>
          <h1>EM BREVE NOVIDADES...</h1>
        </Text>
        <Social>
            <a href="https://www.instagram.com/brecholo.brecho/" target="_blank">
                <img src={Insta}/>
            </a>
        </Social>
      </Content>
    </Container>
  );
}