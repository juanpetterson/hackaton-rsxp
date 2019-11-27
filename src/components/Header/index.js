import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Item, User, Name } from './styles';

export default function Header() {
  return (
    <Container>
      {/* <Logo /> */}
      <Menu>
        <Item>
          <Link to="/dashboard">Lições</Link>
        </Item>
        <Item>
          <Link to="/artigos">Programar dá futuro?</Link>
        </Item>
        <Item>
          <Link to="/eventos">Hackatons</Link>
        </Item>
      </Menu>
      <User>
        <Name>Diego Fernandes</Name>
        {/* <Avatar /> */}
      </User>
    </Container>
  );
}
