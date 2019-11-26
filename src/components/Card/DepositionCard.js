import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { primaryTextColor } from 'assets/styles/baseStyles';

const useStyles = makeStyles({
  container: {
    maxWidth: 245,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  },
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '1.1rem',
    color: primaryTextColor,
  },
  description: {
    textAlign: 'center',
  },
  image: {
    borderRadius: '50%',
    maxWidth: '150px',
    maxHeight: '150px',
    height: 'auto',
    margin: '10px 0',
  },
});

function DepositionCard(props) {
  const classes = useStyles();
  const { avatar, name, description } = props;

  return (
    <div className={classes.container}>
      <img src={avatar} alt="depositionImage" className={classes.image} />
      <div className={classes.content}>
        <Typography className={classes.name} variant="body2" component="p">
          {name}
        </Typography>
        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default DepositionCard;
