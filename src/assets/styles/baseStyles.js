const containerFluid = {
  marginRight: 'auto',
  marginLeft: 'auto',
};
const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const primaryColor = '#f99';
const secondaryColor = '#9f0';
const primaryTextColor = '#282828';
const backgroundColor = '#FFF';

export {
  container,
  primaryColor,
  primaryTextColor,
  secondaryColor,
  backgroundColor,
};
