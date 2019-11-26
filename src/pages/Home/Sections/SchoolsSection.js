import React from 'react';
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// core components
import { primaryTextColor } from 'assets/styles/baseStyles';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
};

const useStyles = makeStyles(theme => ({
  section: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    background: '#ddd',
    height: '400px',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    color: primaryTextColor,
    padding: '20px',
    lineHeight: '40px',
    fontSize: '20px',
    fontWeight: '400',
  },
  button: {
    maxWidth: '200px',
  },
}));

function BannerSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.container}>
            Teste
            <Button className={classes.button}>Estou dentro</Button>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default BannerSection;
