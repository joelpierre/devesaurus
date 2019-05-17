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

const mockFormBase = [
  {
    fieldSet: {
      legend: 'FormBase Legend',
      description: 'some text here',
      fields: [
        {
          type: 'input',
          columns: {
            colMd: 6,
          },
          input: {
            label: 'label-1',
            name: 'test-1',
            type: 'text',
            placeholder: 'placeholder-1',
          },
        },
        {
          type: 'select',
          columns: {
            colMd: 6,
          },
          input: {
            label: 'label-2',
            name: 'test-2',
            placeholder: 'placeholder-1',
            options: [
              {
                name: 'option-name',
                value: 'option-value',
              },
            ],
          },
        },
        {
          type: 'file',
          columns: {},
          input: {
            name: 'file-name',
            placeholder: 'file-placeholder',
          },
        },
      ],
    },
  },
];

const FormBase = ({ formGroups }) => {
  return (
    <form
      data-test="component-form-base"
      className={classNames(styles['form-base'])}
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
            <Row classes={styles['form-base__row']}>
              {fields.map(
                (
                  {
                    type,
                    columns: { col, colXs, colSm, colMd, colLg, colXl },
                    input: {
                      name,
                      type: inputType,
                      placeholder,
                      options,
                      ...field
                    },
                  },
                  index
                ) => (
                  <Flex
                    key={index}
                    colXl={colXl}
                    colLg={colLg}
                    colMd={colMd}
                    colSm={colSm}
                    colXs={colXs}
                    col={col || 12}
                  >
                    <FormField
                      classes={classNames(styles['form-base__form-field'])}
                    >
                      {type === 'input' && (
                        <InputField
                          name={name}
                          type={inputType}
                          placeholder={placeholder}
                          classes={classNames(styles['form-base__input-field'])}
                          {...field}
                        />
                      )}
                      {type === 'select' && (
                        <SelectField
                          name={name}
                          placeholder={placeholder}
                          classes={classNames(styles['form-base__select'])}
                          options={options}
                          {...field}
                        />
                      )}
                      {type === 'file' && (
                        <FileUpload
                          name={name}
                          placeholder={placeholder}
                          classes={classNames(styles['form-base__file-upload'])}
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

      <FormField classes={classNames(styles['form-base__submit-field'])}>
        <Button behavior="action" type="submit">
          Submit
        </Button>
      </FormField>
    </form>
  );
};

FormBase.defaultProps = {
  formGroups: mockFormBase,
};

FormBase.propTypes = {
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
  ),
};

export default FormBase;
