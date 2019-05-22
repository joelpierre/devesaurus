import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.module.scss';

const Heading = ({ priority, children, classes, innerHTML }) => {
  const Tag = `h${priority}`;

  if (innerHTML) {
    return (
      <Tag
        data-test="component-heading"
        className={classNames([`${styles[`heading-${priority}`]}`, classes])}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

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
  children: undefined,
  classes: undefined,
  innerHTML: true,
};

Heading.propTypes = {
  priority: PropTypes.oneOf(['1', 1, '2', 2, '3', 3, '4', 4, '5', 5, '6', 6])
    .isRequired,
  innerHTML: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Heading;
