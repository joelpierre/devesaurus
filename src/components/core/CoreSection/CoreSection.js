import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './CoreSection.module.scss';

const CoreSection = ({ children, classes, type }) => {
  const Tag = `${type}`;

  return (
    <Tag
      data-test="component-core-section"
      className={classNames({
        [styles.section]: true,
        [classes]: classes,
      })}
    >
      {children}
    </Tag>
  );
};

CoreSection.defaultProps = {
  classes: null,
  type: 'section',
};

CoreSection.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CoreSection;
