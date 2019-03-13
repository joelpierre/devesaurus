import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Buttons.module.scss';

function Buttons({ text, theme, link }) {
  return (
    <Link className={`${styles.btn} btn--${theme}`} to={link}>
      {text}
    </Link>
  );
}

export default Buttons;
