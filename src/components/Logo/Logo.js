import React from 'react';

import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => (
  <div className={classes.logo}>
    <img src={burgerLogo} alt="Burger" />
  </div>
);

export default logo;