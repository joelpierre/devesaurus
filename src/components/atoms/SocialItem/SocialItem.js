import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SocialItem.module.scss';

const SocialItem = ({ name, link, classes }) => {
  let icon;

  switch (name) {
    case 'facebook':
      icon = 'facebook-f';
      break;
    case 'linkedin':
      icon = 'linkedin-in';
      break;
    default:
      icon = name;
  }

  return (
    <li
      className={classNames(
        styles['social-item'],
        classes,
        styles['social-item--theme-gradient-brand']
      )}
      data-test="component-social-item"
    >
      <a
        data-test="social-item-link"
        className={styles['social-item__link']}
        href={link}
        aria-label={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon data-test="social-item-icon" icon={['fab', icon]} />
      </a>
    </li>
  );
};

SocialItem.defaultProps = {
  classes: undefined,
};

SocialItem.propTypes = {
  classes: PropTypes.string,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialItem;
