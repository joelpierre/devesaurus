import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../atoms/InputField/InputField';
import Button from '../Buttons/Button';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import styles from './InputGroup.module.scss';
import { themePropType } from '../../../utils/propTypes';

const InputGroup = ({
  append,
  prepend,
  name,
  placeholder,
  disabled,
  readonly,
  min,
  max,
  type,
}) => {
  let inputField;
  let preButtonEl;
  let appButtonEl;
  let preIconEl;
  let appIconEl;
  let preText;
  let appText;

  if (prepend) {
    /**
     * If there is a button to prepend to the input group.
     */
    if (prepend.button) {
      const preButton = prepend.button;
      preButtonEl = (
        <Button
          link={preButton.link}
          text={preButton.text}
          behavior={preButton.behavior}
          size={preButton.size}
          theme={preButton.theme}
        />
      );
    }

    /**
     * If there is an icon to prepend to the input group
     */
    if (prepend.icon) {
      const preIcon = prepend.icon;
      preIconEl = <SvgIcon name={preIcon} />;
    }

    /**
     * If there is text to prepend
     */
    if (prepend.text) {
      preText = prepend.text;
    }
  }

  if (append) {
    /**
     * If there is a button to append to the input group
     */
    if (append.button) {
      const appButton = append.button;
      appButtonEl = (
        <Button
          link={appButton.link}
          text={appButton.text}
          behavior={appButton.behavior}
          size={appButton.size}
          theme={appButton.theme}
        />
      );
    }

    /**
     * If there is an Icon to append to the input group
     */
    if (append.icon) {
      const appIcon = append.icon;
      appIconEl = <SvgIcon name={appIcon} />;
    }

    /**
     * If there is text to append
     */
    if (append.text) {
      appText = append.text;
    }
  }

  /**
   * Switch statement to render the correct Input
   */
  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'date':
      inputField = (
        <InputField
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
      break;
    case 'number':
      inputField = (
        <InputField
          type={type}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
      break;
  }

  return (
    <div data-test="component-input-group" className={styles['input-group']}>
      {prepend && (
        <div className={styles['input-group__prepend']}>
          {preButtonEl && (
            <div
              data-test="input-group-button"
              className={styles['input-group__button-wrapper']}
            >
              {preButtonEl}
            </div>
          )}

          {preIconEl && (
            <div className={styles['input-group__inner']}>
              <div
                data-test="input-group-icon"
                className={styles['input-group__icon-wrapper']}
              >
                {preIconEl}
              </div>
            </div>
          )}

          {preText && (
            <div className={styles['input-group__inner']}>
              <div
                data-test="input-group-text"
                className={styles['input-group__text']}
              >
                {preText}
              </div>
            </div>
          )}
        </div>
      )}

      <div
        data-test="input-group-input"
        className={styles['input-group__input']}
      >
        {inputField}
      </div>

      {append && (
        <div className={styles['input-group__append']}>
          {appButtonEl && (
            <div
              data-test="input-group-button"
              className={styles['input-group__button-wrapper']}
            >
              {appButtonEl}
            </div>
          )}

          {appIconEl && (
            <div className={styles['input-group__inner']}>
              <div
                data-test="input-group-icon"
                className={styles['input-group__icon-wrapper']}
              >
                {appIconEl}
              </div>
            </div>
          )}

          {appText && (
            <div className={styles['input-group__inner']}>
              <div
                data-test="input-group-text"
                className={styles['input-group__text']}
              >
                {appText}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

InputGroup.defaultProps = {
  append: null,
  prepend: null,
  placeholder: null,
  disabled: false,
  readonly: false,
  min: null,
  max: null,
  type: 'text',
};

InputGroup.propTypes = {
  append: PropTypes.shape({
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ...themePropType,
      behavior: PropTypes.oneOf(['action']),
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
    }),
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  prepend: PropTypes.shape({
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      ...themePropType,
      behavior: PropTypes.oneOf(['action']),
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
    }),
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'date', 'email', 'number']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.number,
};

export default InputGroup;
