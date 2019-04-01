import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../atoms/InputField/InputField';
import Button from '../Buttons/Button';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

const InputGroup = (
  {
    append, prepend, name, placeholder, disabled, readonly, min, max, type,
  },
) => {
  let inputField;
  let preButton;
  let appButton;
  let preButtonEl;
  let appButtonEl;
  let preIcon;
  let appIcon;
  let preIconEl;
  let appIconEl;

  if (prepend) {
    /**
     * If there is a button to prepend to the input group.
     */
    if (prepend.button) {
      preButton = prepend.button;
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
      preIcon = prepend.icon;
      preIconEl = (<SvgIcon name={preIcon}/>);
    }
  }

  if (append) {
    /**
     * If there is a button to append to the input group
     */
    if (append.button) {
      appButton = append.button;
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
      appIcon = prepend.icon;
      appIconEl = (<SvgIcon name={appIcon}/>);
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
          className="form-control"
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
          className="form-control"
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
    default:
      inputField = (
        <InputField
          className="form-control"
          type="text"
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
        />
      );
  }

  return (
    <div data-test="component-input-group" className="input-group">
      {prepend && (
        <div className="input-group__prepend">
          <span className="input-group__inner">
            {preButtonEl && preButtonEl}
            {preIconEl && preIconEl}
            {prepend.text && prepend.text}
          </span>
        </div>
      )}

      <div className="input-group__input">
        {inputField}
      </div>

      {append && (
        <div className="input-group__append">
          <span className="input-group__inner">
            {appButtonEl && appButtonEl}
            {appIconEl && appIconEl}
            {append.text && append.text}
          </span>
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
};

InputGroup.propTypes = {
  append: PropTypes.shape({
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      theme: PropTypes.oneOf(['brand', 'alpha', 'beta', 'tint-alpha', 'tint-beta', 'tint-omega', 'tint-gamma', 'tint-psi']),
      behavior: PropTypes.oneOf(['router', 'anchor']),
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
    }),
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  prepend: PropTypes.shape({
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      theme: PropTypes.oneOf(['brand', 'alpha', 'beta', 'tint-alpha', 'tint-beta', 'tint-omega', 'tint-gamma', 'tint-psi']),
      behavior: PropTypes.oneOf(['router', 'anchor']),
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
    }),
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
    ['text', 'password', 'date', 'email', 'number'],
  ).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  min: PropTypes.string,
  max: PropTypes.number,
};

export default InputGroup;
