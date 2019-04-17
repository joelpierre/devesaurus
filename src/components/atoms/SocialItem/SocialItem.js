import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon/SvgIcon';

const SocialItem = ({ name, link }) => {
  return (
    <>
      <li data-test="component-social-item">
        <a
          href={link}
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SvgIcon name={name} />
        </a>
      </li>
    </>
  );
};

SocialItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialItem;
