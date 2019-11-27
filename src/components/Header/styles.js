import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: url('../../assets/img/header/header.png') no-repeat;
`;

export const WrapperLogo = styled.div``;

export const Logo = styled.img`
  margin: 24px 0 0 24px;
`;

export const TitleLogo = styled.img`
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

  a:visited {
    color: #4d4d4d;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Name = styled.h1`
  font-size: 18px;
  font-weight: normal;
  color: #f36d34;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: rgba(0, 0, 0, 0.3);
  margin: 8px;
`;
