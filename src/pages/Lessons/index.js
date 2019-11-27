import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import mock from './mock';

export default function Lessons() {
  const [data, setData] = useState({});

  let { id } = useParams();

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
    <div className="lesson">
      <header>
        <h1>
          Lição: {data.title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      </header>
      <section>
        <div className="editor-wrapper">
          <iframe src={`/editor/lesson1/index.html?level=${id}`}></iframe>
        </div>
      </section>
    </div>
  );
}
