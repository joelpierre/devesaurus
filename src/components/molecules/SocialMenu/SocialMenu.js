import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './SocialMenu.module.scss';
import SocialItem from '../../atoms/SocialItem/SocialItem';

export const PureSocialMenu = ({ className, allWordpressAcfOptions }) => {
  const { options } = allWordpressAcfOptions.edges[0].node;
  const { facebook, twitter, instagram, linkedin } = options;

  return (
    <nav
      data-test="component-social-menu"
      className={classNames(styles['social-menu'], className)}
    >
      <ul className={styles['social-menu__list']}>
        {facebook && (
          <SocialItem
            className={styles['social-menu__item']}
            name="facebook"
            link={facebook}
          />
        )}

        {twitter && (
          <SocialItem
            className={styles['social-menu__item']}
            name="twitter"
            link={twitter}
          />
        )}

        {instagram && (
          <SocialItem
            className={styles['social-menu__item']}
            name="instagram"
            link={instagram}
          />
        )}

        {linkedin && (
          <SocialItem
            className={styles['social-menu__item']}
            name="linkedin"
            link={linkedin}
          />
        )}
      </ul>
    </nav>
  );
};

const SocialMenu = ({ className }) => (
  <StaticQuery
    data-test="component-primary-menu-query"
    query={menuQuery}
    render={props => <PureSocialMenu {...props} className={className} />}
  />
);

SocialMenu.defaultProps = {
  className: undefined,
};

SocialMenu.propTypes = {
  className: PropTypes.string,
};

export default SocialMenu;

const menuQuery = graphql`
  {
    allWordpressAcfOptions {
      edges {
        node {
          options {
            facebook
            twitter
            instagram
            linkedin
          }
        }
      }
    }
  }
`;
