import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import { container, backgroundColor } from 'assets/styles/baseStyles';
import BannerSection from './Sections/BannerSection';
import DepositionsSection from './Sections/DepositionsSection';
import Header from 'components/Header';

const useStyles = makeStyles({
  container: {
    ...container,
    background: backgroundColor,
  },
});

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <BannerSection />
      <div className={classes.container}>
        <DepositionsSection />
      </div>
    </div>
  );
}

export default Home;
