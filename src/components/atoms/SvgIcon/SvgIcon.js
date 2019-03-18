import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = (
  {
    name,
    description,
    fill,
    width,
    classes,
    height,
  },
) => {

  const req = require.context('../../../icons/', true, /^\.\/.*\.svg$/);

  const svg = (name) => {
    let svg = markup;
    const titleReg = /<[title/>][^>]*><\/[title>]+>/;
    const descReg = /<[desc/>][^>]*><\/[desc>]+>/;

    svg = svg.replace(titleReg, `<title>${name}</title>`);
    svg = svg.replace(descReg, `<desc>${description}</desc>`);

    return svg;
  };

  const markup = (name) => {
    return req('./' + name + '.svg')
      .replace(
        /^<svg /,
        `<svg role="img" class="${classes}" style="fill:${fill};width:${width};height:${height}" `,
      );
  };
  return (
    <span aria-label={name} className="svg-icon-wrapper" dangerouslySetInnerHTML={svg}/>
  );
};

SvgIcon.defaultProps = {
  width: '100%',
  height: '100%',
  fill: '#000000',
  viewBox: '0 0 32 32',
  description: 'An SVG Icon',
};

SvgIcon.propTypes = {
  name: PropTypes.string().isRequired,
  description: PropTypes.string(),
  classes: PropTypes.string().isRequired,
  fill: PropTypes.string(),
  width: PropTypes.string(),
  height: PropTypes.string(),
  viewBox: PropTypes.string(),
};

export default SvgIcon;
