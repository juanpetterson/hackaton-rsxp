import React from 'react';

import { Container, Main, List } from './styles';
import Header from 'components/Header';

export default function Articles() {
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <h1>PROGRAMAÇÃO DÁ FUTURO?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Main>
        <List>
          <li>
            <h1>COMO FAÇO UM APLICATIVO?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ...
            </p>
          </li>
          <li>
            <h1>COMO FAÇO UM APLICATIVO?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ...
            </p>
          </li>
          <li>
            <h1>COMO FAÇO UM APLICATIVO?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ...
            </p>
          </li>
          <li>
            <h1>COMO FAÇO UM APLICATIVO?</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s ...
            </p>
          </li>
        </List>
      </Container>
    </div>
  );
}
