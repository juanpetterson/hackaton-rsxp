import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 800px;
  border-radius: 4px;
  background: #ccc;
  padding: 50px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`;
export const List = styled.ul`
  margin-top: 10px;
  list-style: none;
  width: 800px;
  display: flex;

  flex-direction: row;

  li {
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
