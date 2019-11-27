import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.scss';
import mock from './mock';
import Header from 'components/Header';

export default function Lessons() {
  const [data, setData] = useState({});

  let { id } = useParams();
  id = parseInt(id);

  function getLessonData() {
    const lesson = mock.filter(item => item.id == id);
    if (lesson.length) {
      setData(lesson[0]);
    }
  }

  useEffect(() => {
    getLessonData();
  });

  return (
    <div>
      <Header signed />
      <div className="lesson">
        <nav>
          <Link className="back" to="/dashboard">
            Voltar para o Dashboard
          </Link>
        </nav>
        <header>
          <h1>Lição: {data.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </header>
        <section>
          <div className="editor-wrapper">
            <iframe src={`/editor/lesson1/index.html?level=${id}`}></iframe>
          </div>
        </section>
        <footer>
          {id > 1 && (
            <Link className="left" to={`/lessons/${id - 1}`}>
              Lição anterior
            </Link>
          )}
          <span></span>
          {id < 3 && (
            <Link className="right" to={`/lessons/${id + 1}`}>
              Próxima lição
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
