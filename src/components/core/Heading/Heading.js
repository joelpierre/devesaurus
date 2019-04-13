import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.module.scss';

const Heading = ({ priority, children, classes }) => {
  const Tag = `h${priority}`;

  return (
    <Tag
      data-test="component-heading"
      className={classNames([`${styles[`heading-${priority}`]}`, classes])}
    >
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  children: null,
  classes: null,
};

Heading.propTypes = {
  priority: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Heading;
