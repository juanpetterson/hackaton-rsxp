import styled from 'styled-components';
import Background from 'assets/img/header/header.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url(${Background}) no-repeat;
  background-position: top right;
  background-size: auto 100%;
`;

export const WrapperLogo = styled.a``;

export const Logo = styled.img`
  margin: 0 0 0 24px;
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
    color: #f36d34;
    transition: 0.2s;
  }

  a:visited {
    color: #f36d34;
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

export const WrapperSign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;

export const SignUp = styled.a`
  border: 0;
  padding: 10px;
  background: #f36d34;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;

  :visited {
    color: #fff;
  }
`;

export const SignIn = styled.a`
  font-size: 18px;
  color: #f36d34;
  font-weight: bold;
  margin-right: 16px;
  cursor: pointer;

  :visited {
    color: #f36d34;
  }
`;
