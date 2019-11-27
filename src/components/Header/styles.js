import styled from 'styled-components';
import Background from 'assets/img/header/header.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url(${Background}) no-repeat;
  background-position: top right;
  background-size: auto 100%;
  z-index: 2;
  position: relative;
`;

export const WrapperLogo = styled.div`
  background: #fff;
`;

export const Logo = styled.img`
  margin: 24px 0 0 24px;
`;

export const TitleLogo = styled.img`
  width: 100px;
  position: relative;
  left: 10px;
  top: -55px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Item = styled.li`
  list-style: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin: 0 50px;

  a {
    transition: 0.2s;
  }

  a:visited {
    color: #4d4d4d;
  }

  a:hover {
    color: #f36d34;
    border-bottom: 2px solid #f36d34;
  }
`;

export const User = styled.img`
  margin: 24px 24px 0 0;
  width: 250px;
  height: 100px;
`;
