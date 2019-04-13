import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ priority, children }) => {
  const Tag = `h${priority}`;

  return (
    <Tag
      data-test="component-heading"
      className={`${styles[`heading-${priority}`]}`}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  priority: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
