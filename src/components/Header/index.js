import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  WrapperLogo,
  Logo,
  TitleLogo,
  Menu,
  Item,
  User,
  Name,
  Avatar,
} from './styles';

import LogoImage from '../../assets/img/header/logo.png';
import LogoText from '../../assets/img/header/logo-text.png';

export default function Header() {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoImage} />
        <TitleLogo src={LogoText} />
      </WrapperLogo>
      <Menu>
        <Item>
          <Link to="/dashboard">Lições</Link>
        </Item>
        <Item>
          <Link to="/articles">Programar dá futuro?</Link>
        </Item>
        <Item>
          <Link to="/events">Hackatons</Link>
        </Item>
      </Menu>
      <User>
        <Name>Diego Fernandes</Name>
        <Avatar />
      </User>
    </Container>
  );
}
