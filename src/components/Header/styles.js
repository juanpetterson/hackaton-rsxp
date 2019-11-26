import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  list-style: none;
  padding: 10px;
  font-size: 36px;

  &:hover {
    background: red;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: normal;
`;
