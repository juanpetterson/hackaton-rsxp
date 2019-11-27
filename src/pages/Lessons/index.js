import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function Lessons() {
  let { id } = useParams();

  return (
    <div className="lesson">
      <header>
        <h1>Lição {id}</h1>
        <p>
          Escreva um código que verifique corretamente o resultado de uma conta
          de multiplicação. Caso o resultado esteja correto, deve exibir
          "ACERTOU!" e caso esteja errado, aparece "ERROU!"
        </p>
      </header>
      <section>
        <div className="editor-wrapper">
          <iframe src="/editor/index.html"></iframe>
        </div>
      </section>
    </div>
  );
}
