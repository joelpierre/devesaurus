import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './CoreSection.module.scss';

const CoreSection = ({ children, classes, type, contrast }) => {
  const Tag = `${type}`;

  return (
    <Tag
      data-test="component-core-section"
      className={classNames({
        [styles.section]: true,
        [classes]: classes,
        'theme--tint-alpha': !contrast,
        'theme--tint-beta': contrast,
      })}
    >
      {children}
    </Tag>
  );
};

CoreSection.defaultProps = {
  classes: null,
  type: 'section',
  contrast: false, // false = white, true = grey
};

CoreSection.propTypes = {
  classes: PropTypes.string,
  type: PropTypes.string,
  contrast: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CoreSection;
