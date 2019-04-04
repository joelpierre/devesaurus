import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HeroSearch.module.scss';

const HeroSearch = ({ title }) => {
  return (
    <section className={`primary-main__section ${styles['hero-search']}`} data-test="component-hero-search">
      <div className="container">
        <div className="flex">
          <h1>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

HeroSearch.defaultProps = {};

HeroSearch.propTypes = {};

export default HeroSearch;
