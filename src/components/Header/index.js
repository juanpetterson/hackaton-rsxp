import React from 'react';

import { Container, Menu, Item, User, Name } from './styles';

export default function Header() {
  return (
    <Container>
      {/* <Logo /> */}
      <Menu>
        <Item>Lições</Item>
        <Item>Artigos</Item>
        <Item>Eventos</Item>
      </Menu>
      <User>
        <Name>Diego Fernandes</Name>
        {/* <Avatar /> */}
      </User>
    </Container>
  );
}
