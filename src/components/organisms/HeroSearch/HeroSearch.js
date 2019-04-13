import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './HeroSearch.module.scss';
import GridContainer from '../../core/GridContainer/GridContainer';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';
import Heading from '../../core/Heading/Heading';

const HeroSearch = ({ title }) => {
  return (
    <CoreSection classes={styles['hero-search']}>
      <GridContainer data-test="component-hero-search">
        <GridRow>
          <GridColumn type="article" classes="flex">
            <Heading priority="1">{title} Herooo</Heading>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
};

HeroSearch.defaultProps = {
  title: 'Company Name',
};

HeroSearch.propTypes = {
  title: PropTypes.string,
};

export default HeroSearch;
