import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './TagCloud.module.scss';

const TagCloud = ({ classes }) => {
  return (
    <div
      className={classNames(styles['tag-cloud'], classes)}
      data-test="component-tag-cloud"
    >
      Tag cloud here
    </div>
  );
};

TagCloud.defaultProps = {
  classes: undefined,
};

TagCloud.propTypes = {
  classes: PropTypes.string,
};

export default TagCloud;
