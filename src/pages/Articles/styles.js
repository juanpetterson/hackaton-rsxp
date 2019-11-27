import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 600px; */
  margin: 50px auto;
`;

export const Main = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 80%;
  border-radius: 4px;
  background: #ccc;
  padding: 50px;
  box-sizing: border-box;
  h1 {
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 800px; */

  padding: 50px;

  li {
    background: #ccc;
    border-radius: 4px;
    margin: 10px;
    padding: 20px;
    width: 600px;
    height: 200px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
`;
