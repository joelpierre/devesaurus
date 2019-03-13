export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

export const mapOverACFComponents = (components) => {
  components.map((component) => {
    component.acf_fc_layout = component.acf_fc_layout.replace('WordPressAcf_', '');
  });
  return components;
};
