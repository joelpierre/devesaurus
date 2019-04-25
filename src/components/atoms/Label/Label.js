import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './Label.module.scss';

const Label = ({ text, link }) => {
  const label = link ? (
    <Link data-test="component-label" to={link} className={styles.label}>
      {text}
    </Link>
  ) : (
    <span data-test="component-label" className={styles.label}>
      {text}
    </span>
  );

  return <>{label}</>;
};

Label.defaultProps = {
  link: null,
};

Label.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Label;
