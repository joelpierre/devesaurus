export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});

export const mapOverACFComponents = (components) => {
  components.map((component) => {
    component.__typename = component.__typename.replace('WordPressAcf_', '');
  });
  return components;
};
