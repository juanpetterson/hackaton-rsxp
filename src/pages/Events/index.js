import React from 'react';

import Header from '../../components/Header';

import {
  List,
  Event,
  Ranking,
  Title,
  School,
  SchoolImage,
  SchoolWrapper,
  SchoolTitle,
  SchoolRating,
} from './styles';

import './style.css';

export default function Events() {
  return (
    <div>
      <Header signed />
      <div className="hackatons-mock">
      <img src={require('assets/img/hackatons.jpg')} />
      </div>
    </div>
  );
}
