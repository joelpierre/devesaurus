import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FileUpload.module.scss';

const FileUpload = ({ name, placeholder, ...props }) => {
  return (
    <div
      data-test="component-file-upload"
      className={classNames(styles['file-upload'])}
    >
      <label htmlFor={name} className={styles['file-upload__inner']}>
        <span className={styles['file-upload__label']}>
          <span className={styles['file-upload__label-text']}>
            {placeholder}
          </span>
          <span className={styles['file-upload__btn']}>
            <span className={styles['file-upload__btn-text']}>Browse</span>
          </span>
        </span>
        <input
          name={name}
          type="file"
          className={styles['file-upload__input']}
          {...props}
        />
      </label>
    </div>
  );
};

FileUpload.defaultProps = {
  placeholder: 'Choose file from folder',
};

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default FileUpload;
