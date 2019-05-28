import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import styles from './FormBase.module.scss';
import InputField from '../../atoms/InputField/InputField';
import SelectField from '../../atoms/SelectField/SelectField';
import FileUpload from '../../atoms/FileUpload/FileUpload';
import Row from '../../core/Row/Row';
import Flex from '../../core/Flex/Flex';
import FormField from '../FormField/FormField';
import Button from '../Buttons/Button';
import { slugify } from '../../../utils';
import { themePropType } from '../../../utils/propTypes';

const FormBase = ({
  className,
  formName,
  buttons,
  formGroups,
  encType,
  onSubmit,
}) => {
  return (
    <form
      id={slugify(formName)}
      data-test="component-form-base"
      className={classNames(styles['form-base'], className)}
      encType={encType}
      onSubmit={onSubmit}
    >
      {formGroups.map(
        ({ fieldSet: { legend, description, fields } }, index) => (
          <div key={index} className={styles['form-base__group']}>
            {legend && (
              <legend className={styles['form-base__legend']}>{legend}</legend>
            )}
            {description && (
              <p className={styles['form-base__description']}>{description}</p>
            )}
            <Row className={styles['form-base__row']}>
              {fields.map(
                (
                  {
                    type,
                    input: {
                      name,
                      type: inputType,
                      placeholder,
                      options,
                      className,
                      ...field
                    },
                  },
                  index
                ) => (
                  <Flex
                    key={index}
                    colXl={field.columns ? field.columns.colXl : undefined}
                    colLg={field.columns ? field.columns.colLg : undefined}
                    colMd={field.columns ? field.columns.colMd : undefined}
                    colSm={field.columns ? field.columns.colSm : undefined}
                    colXs={field.columns ? field.columns.colXs : undefined}
                    col={field.columns ? field.columns.col || 12 : 12}
                  >
                    <FormField
                      className={classNames(styles['form-base__form-field'])}
                    >
                      {type === 'input' && (
                        <InputField
                          name={name}
                          type={inputType}
                          placeholder={placeholder}
                          className={classNames(
                            styles['form-base__input-field'],
                            className
                          )}
                          {...field}
                        />
                      )}
                      {type === 'select' && (
                        <SelectField
                          name={name}
                          placeholder={placeholder}
                          className={classNames(
                            styles['form-base__select-field'],
                            className
                          )}
                          options={options}
                          {...field}
                        />
                      )}
                      {type === 'file' && (
                        <FileUpload
                          name={name}
                          placeholder={placeholder}
                          className={classNames(
                            styles['form-base__file-upload'],
                            className
                          )}
                          {...field}
                        />
                      )}
                    </FormField>
                  </Flex>
                )
              )}
            </Row>
          </div>
        )
      )}

      <Row className={styles['form-base__row']}>
        {buttons.map(({ theme, type, className, text }, index) => (
          <Flex key={index} auto>
            <FormField className={classNames(styles['form-base__buttons'])}>
              <Button
                theme={theme}
                behavior="action"
                type={type}
                className={classNames(className, styles['form-base__button'])}
              >
                {text}
              </Button>
            </FormField>
          </Flex>
        ))}
      </Row>
    </form>
  );
};

FormBase.defaultProps = {
  className: undefined,
  encType: 'multipart/form-data',
  onSubmit: e => {
    e.preventDefault();
    console.warn(
      'WARNING:: Please add an onSubmit function as a prop to the FormBase component'
    );
  },
};

FormBase.propTypes = {
  className: PropTypes.string,
  formName: PropTypes.string.isRequired,
  encType: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['submit', 'reset']),
      className: PropTypes.string,
      text: PropTypes.string,
      ...themePropType,
    })
  ).isRequired,
  formGroups: PropTypes.arrayOf(
    PropTypes.shape({
      fieldSet: PropTypes.shape({
        legend: PropTypes.string,
        description: PropTypes.string,
        fields: PropTypes.arrayOf(
          PropTypes.shape({
            type: PropTypes.oneOf(['input', 'select', 'file']),
            columns: PropTypes.shape({
              col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              colXs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              colSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              colMd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              colLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              colXl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            }),
            input: PropTypes.shape({
              name: PropTypes.string.isRequired,
              label: PropTypes.string,
              type: PropTypes.oneOf([
                'text',
                'password',
                'date',
                'email',
                'select',
                'file',
                'number',
              ]),
              placeholder: PropTypes.string,
              disabled: PropTypes.bool,
              sm: PropTypes.bool,
              md: PropTypes.bool,
              lg: PropTypes.bool,
              min: PropTypes.string,
              max: PropTypes.number,
              // Select options
              options: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string.isRequired,
                  value: PropTypes.string.isRequired,
                })
              ),
            }),
          })
        ),
      }),
    })
  ).isRequired,
  onSubmit: PropTypes.func,
};

export default FormBase;
