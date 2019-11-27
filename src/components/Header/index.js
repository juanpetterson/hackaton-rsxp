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
} from './styles';

import LogoImage from '../../assets/img/header/logo.png';
import LogoText from '../../assets/img/header/logo-text.png';
import UserImage from '../../assets/img/header/user.png';

export default function Header({ signed }) {
  return (
    <Container>
      <WrapperLogo>
        <Logo src={LogoImage} />
        <TitleLogo src={LogoText} />
      </WrapperLogo>
      {signed ? (
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
      ) : null}
      <User src={UserImage} />
    </Container>
  );
}
