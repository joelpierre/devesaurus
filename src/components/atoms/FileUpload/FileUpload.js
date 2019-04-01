import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon/SvgIcon';

import * as styles from './FileUpload.scss';

const FileUpload = ({ name, placeholder }) => {
  return (
    <div data-test="component-file-upload" className={styles.fileUpload}>
      <label htmlFor={name} className="file-upload__inner">
        <span className="file-upload__label">{placeholder}</span>
        <input name={name} type="file" className="file-upload__control"/>
        <SvgIcon classes="file-upload__icon" name="complete"/>
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
