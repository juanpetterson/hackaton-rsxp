import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import titleConquests from 'assets/img/dashboard/title-conquistas.png';
import titleDashboard from 'assets/img/dashboard/title-dashboard.png';

import {
  LessonContainer,
  LessonHeader,
  LessonFooter,
  LessonSpan,
  EnterlessonWrapper,
  EnterLesson,
  DashboardImageContainer,
  ConquestsContainer,
  ConquestsTitle,
  ConquestsItem,
  ConquestsItemWrapper,
} from './styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '70px',
  },
  grid: {
    textAlign: 'center',
  },
}));

export default function Dashboard() {
  const [currentLevel, setCurrentLevel] = useState(1);

  function checkLevel() {
    const maxLevels = 3;
    for (let i = 0; i < maxLevels; i++) {
      const level = window.localStorage.getItem(`lesson_${i + 1}`);
      if (!level) {
        console.log(i, i + 1);
        setCurrentLevel(i + 1);
        break;
      }
    }
  }

  useEffect(() => {
    checkLevel();
  });
  const classes = useStyles();
  return (
    <div>
      <Header signedIn />
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={8} md={8} className={classes.grid}>
          <DashboardImageContainer>
            <img src={titleDashboard} alt="titleDashboard" />
          </DashboardImageContainer>
          <LessonContainer>
            <LessonHeader>
              <LessonSpan>{`Lição 0${currentLevel}`}</LessonSpan>
              <LessonSpan>{`0${currentLevel}/10`}</LessonSpan>
            </LessonHeader>
            <LessonFooter>
              <EnterlessonWrapper href={`/lessons/${currentLevel}`}>
                <EnterLesson href={`/lessons/${currentLevel}`}>
                  Entrar na Lição
                </EnterLesson>
              </EnterlessonWrapper>
            </LessonFooter>
          </LessonContainer>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} className={classes.grid}>
          <ConquestsContainer>
            <div>
              <img src={titleConquests} alt="titleConquests" />
            </div>
            <GridContainer>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 1</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 2</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 3</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 4</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 5</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 6</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
            </GridContainer>
          </ConquestsContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
