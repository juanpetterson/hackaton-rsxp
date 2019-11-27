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

export default function Events() {
  return (
    <>
      <Header />
      <List>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
        <Event>Rocketseat Experience 2019</Event>
      </List>
      <Ranking>
        <Title>Ranking</Title>
        <School>
          <SchoolImage />
          <SchoolWrapper>
            <SchoolTitle>Escola Estadual</SchoolTitle>
            <SchoolRating />
          </SchoolWrapper>
        </School>
      </Ranking>
    </>
  );
}
