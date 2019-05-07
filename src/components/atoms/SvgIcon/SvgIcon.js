import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SvgIcon.module.scss';

const SvgIcon = ({ name, description, fill, classes, center }) => {
  const req = require.context('../../../assets/icons/', true, /^\.\/.*\.svg$/);

  const svg = () => {
    let svg = markup();

    const titleReg = /<[title/>][^>]*><\/[title>]+>/;
    const descReg = /<[desc/>][^>]*><\/[desc>]+>/;

    svg = svg.replace(titleReg, `<title>${name}</title>`);
    svg = svg.replace(descReg, `<desc>${description} for ${name}</desc>`);

    return svg;
  };

  const markup = () => {
    return req('./' + name + '.svg').replace(
      /^<svg /,
      `<svg role="img" class="${classNames([
        styles.icon__svg,
      ])}" style="fill:${fill};"`
    );
  };

  return (
    <span
      data-test="component-svg-icon"
      aria-label={name}
      className={classNames([
        styles.icon,
        { [styles.icon__center]: center },
        classes,
      ])}
      dangerouslySetInnerHTML={{ __html: svg() }}
    />
  );
};

SvgIcon.defaultProps = {
  fill: '#000000',
  description: 'An SVG Icon',
  classes: null,
  center: false,
};

SvgIcon.propTypes = {
  center: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  classes: PropTypes.string,
  fill: PropTypes.string,
};

export default SvgIcon;
