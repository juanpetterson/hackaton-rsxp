import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// core components
import { primaryTextColor } from 'assets/styles/baseStyles';
import imageDeposition1 from 'assets/img/depositions/deposition1.jpg';
import imageDeposition2 from 'assets/img/depositions/deposition2.jpg';
import imageDeposition3 from 'assets/img/depositions/deposition3.jpg';
import imageDeposition4 from 'assets/img/depositions/deposition4.png';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import DepositionCard from 'components/Card/DepositionCard';

const useStyles = makeStyles(theme => ({
  section: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    color: primaryTextColor,
    padding: '20px',
    lineHeight: '40px',
    fontSize: '20px',
    fontWeight: '400',
  },
  title: {
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    marginBottom: '0',
    marginTop: '30px',
    minHeight: '32px',
    textAlign: 'center',
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  deposition: {
    maxWidth: '200px',
  },
}));

function DepositionsSection(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Depoimentos</h2>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3} className={classes.grid}>
          <DepositionCard
            avatar={imageDeposition1}
            name="Name"
            description="Com 14 anos eu já havia ganhado meu primeiro milhão!"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} className={classes.grid}>
          <DepositionCard
            avatar={imageDeposition2}
            name="Name"
            description="Com 14 anos eu já havia ganhado meu primeiro milhão!"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} className={classes.grid}>
          <DepositionCard
            avatar={imageDeposition3}
            name="Name"
            description="Com 14 anos eu já havia ganhado meu primeiro milhão!"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3} className={classes.grid}>
          <DepositionCard
            avatar={imageDeposition4}
            name="Name"
            description="Com 14 anos eu já havia ganhado meu primeiro milhão!"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default DepositionsSection;
