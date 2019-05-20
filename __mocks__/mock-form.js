export const mockFormGroups = [
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

export const mockFormData = {
  formName: 'test Search form',
  buttons: [
    {
      type: 'submit',
      text: 'Submit Form',
      theme: 'brand',
    },
    {
      type: 'reset',
      text: 'Reset Form',
      theme: 'beta',
    },
  ],
  formGroups: mockFormGroups,
};
