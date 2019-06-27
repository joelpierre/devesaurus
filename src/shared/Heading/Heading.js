import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.module.scss';

const Heading = ({ priority, children, className, innerHTML }) => {
  const Tag = `h${priority}`;

  if (innerHTML) {
    return (
      <Tag
        data-test="component-heading"
        className={classNames([`${styles[`heading-${priority}`]}`, className])}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return (
    <Tag
      data-test="component-heading"
      className={classNames([`${styles[`heading-${priority}`]}`, className])}
    >
      {children}
    </Tag>
  );
};

Heading.defaultProps = {
  children: undefined,
  className: undefined,
  innerHTML: true,
};

Heading.propTypes = {
  priority: PropTypes.oneOf(['1', 1, '2', 2, '3', 3, '4', 4, '5', 5, '6', 6])
    .isRequired,
  innerHTML: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Heading;
