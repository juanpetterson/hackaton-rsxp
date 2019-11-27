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
  LessonContent,
  LessonRef,
  LessonStats,
  LessonFooter,
  LessonFooterWrapper,
  EnterLesson,
  EnterLessonSpan,
  LessonTitle,
  DashboardImageContainer,
  ConquestsContainer,
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
      } else {
        setCurrentLevel(i + 1);
      }
    }
  }

  useEffect(() => {
    checkLevel();
  });
  const classes = useStyles();
  return (
    <div>
      <Header signed />
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={8} md={8} className={classes.grid}>
          <DashboardImageContainer>
            <img src={titleDashboard} alt="titleDashboard" />
          </DashboardImageContainer>
          <LessonContainer>
            <LessonRef href={`/lessons/${currentLevel}`}>
              <LessonContent>
                <LessonFooter>
                  <LessonFooterWrapper>
                    <LessonTitle>{`Lição 0${currentLevel}: Avião do Flamengo`}</LessonTitle>
                    <EnterLesson>
                      <EnterLessonSpan>FAZER LIÇÃO</EnterLessonSpan>
                    </EnterLesson>
                  </LessonFooterWrapper>
                </LessonFooter>
              </LessonContent>
            </LessonRef>
            <LessonStats>
              <img src={lessonStats} alt="lessonStats" />
            </LessonStats>
          </LessonContainer>
          <div>
            <img src={proTips} alt="proTips" style={{ width: '100%' }} />
          </div>
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
                    {currentLevel > 1 ? (
                      <div>
                        <img
                          src={conquestBadget1}
                          alt="conquestBadget1"
                          style={{
                            maxWidth: '60px',
                            top: '-10px',
                            left: '1px%',
                            position: 'relative',
                          }}
                        />
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 'bold',
                            position: 'relative',
                            top: '-10px',
                            left: '15px',
                            color: '#565656',
                            display: 'block',
                            width: '10px',
                          }}
                        >
                          Hello World
                        </span>
                      </div>
                    ) : (
                      <ConquestsItemSpan>?</ConquestsItemSpan>
                    )}
                  </ConquestsItem>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={6} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem>
                    <ConquestsItemSpan>?</ConquestsItemSpan>
                  </ConquestsItem>
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
