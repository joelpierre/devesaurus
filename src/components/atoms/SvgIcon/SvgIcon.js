import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './SvgIcon.module.scss';

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

  const svg = () => {
    let svg = markup();

    const titleReg = /<[title/>][^>]*><\/[title>]+>/;
    const descReg = /<[desc/>][^>]*><\/[desc>]+>/;

    svg = svg.replace(titleReg, `<title>${name}</title>`);
    svg = svg.replace(descReg, `<desc>${description} for ${name}</desc>`);

    return svg;
  };

  const markup = () => {
    return req('./' + name + '.svg')
      .replace(
        /^<svg /,
        `<svg role="img" class="${[styles.icon__svg, classes].join(' ')}" style="fill:${fill};width:${width};height:${height}" `,
      );
  };

  return (
    <span aria-label={name} className={styles.icon} dangerouslySetInnerHTML={{ __html: svg() }}/>
  );
};

SvgIcon.defaultProps = {
  width: '100%',
  height: '100%',
  fill: '#000000',
  description: 'An SVG Icon',
  classes: null,
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  classes: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SvgIcon;
