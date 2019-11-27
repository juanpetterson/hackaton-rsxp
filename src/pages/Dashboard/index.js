import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import {
  LessonContainer,
  LessonHeader,
  LessonFooter,
  LessonSpan,
  EnterLesson,
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
  const classes = useStyles();
  return (
    <div>
      <Header signedIn />
      <GridContainer className={classes.container}>
        <GridItem xs={12} sm={8} md={8} className={classes.grid}>
          <LessonContainer>
            <LessonHeader>
              <LessonSpan>Lição 01</LessonSpan>
              <LessonSpan>01/10</LessonSpan>
            </LessonHeader>
            <LessonFooter>
              <EnterLesson>Entrar na Lição</EnterLesson>
            </LessonFooter>
          </LessonContainer>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} className={classes.grid}>
          <ConquestsContainer>
            <GridContainer>
              <GridItem xs={4} sm={4} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 1</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 2</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 3</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 4</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <ConquestsItemWrapper>
                  <ConquestsItem />
                  <ConquestsTitle>Conquista 5</ConquestsTitle>
                </ConquestsItemWrapper>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
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
