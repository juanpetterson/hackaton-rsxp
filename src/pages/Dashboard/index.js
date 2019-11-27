import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import titleConquests from 'assets/img/dashboard/title-conquistas.png';
import titleDashboard from 'assets/img/dashboard/title-dashboard.png';
import titleLiga from 'assets/img/dashboard/title-liga.png';
import rankingItemSchool from 'assets/img/dashboard/ranking-item-escola.png';
import rankingItemUser from 'assets/img/dashboard/ranking-item-user.png';
import conquestBadget1 from 'assets/img/dashboard/badge-01.png';
import lessonStats from 'assets/img/dashboard/lesson-stats.png';
import proTips from 'assets/img/dashboard/dicas-pro.png';

import {
  LessonContainer,
  LessonWrapper,
  LessonContent,
  LessonRef,
  LessonStats,
  LessonFooter,
  EnterLesson,
  DashboardImageContainer,
  ConquestsContainer,
  ConquestsTitle,
  ConquestsItem,
  ConquestsItemSpan,
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
            <LessonRef href={`/lessons/${currentLevel}`}>
              <LessonContent />
            </LessonRef>
            <LessonStats>
              <img src={lessonStats} alt="lessonStats" />
            </LessonStats>
          </LessonContainer>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} className={classes.grid}>
          <ConquestsContainer>
            <div>
              <img
                src={titleConquests}
                alt="titleConquests"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <GridContainer>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 1</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 2</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 3</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 4</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 5</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                  <ConquestsTitle>Conquista 6</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
            </GridContainer>
            <div style={{ margin: '20px 0' }}>
              <img
                src={titleLiga}
                alt="titleLiga"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <div>
              <img
                src={rankingItemSchool}
                alt="rankingItemSchool"
                style={{ width: '100%' }}
              />
            </div>
            <div>
              <img
                src={rankingItemUser}
                alt="titleUser"
                style={{ width: '100%' }}
              />
            </div>
          </ConquestsContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
