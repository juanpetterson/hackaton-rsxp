import React from 'react';
import { Link } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import { container, backgroundColor } from 'assets/styles/baseStyles';
import BannerSection from './Sections/BannerSection';
import DepositionsSection from './Sections/DepositionsSection';
import Header from 'components/Header';
import './style.css';
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
      <Link to="/dashboard">
        <img className="mock" src={require('assets/img/home.jpg')} />
      </Link>
      {/*<BannerSection />
      <div className={classes.container}>
        <DepositionsSection />
      </div>*/}
    </div>
  );
}

export default Home;
