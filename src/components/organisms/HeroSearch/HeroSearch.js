import React from 'react';
import styles from './HeroSearch.module.scss';
import GridContainer from '../../core/GridContainer/GridContainer';
import CoreSection from '../../core/CoreSection/CoreSection';
import GridRow from '../../core/GridRow/GridRow';
import GridColumn from '../../core/GridColumn/GridColumn';
import InputField from '../../atoms/InputField/InputField';
import Brand from '../../atoms/Brand/Brand';
import FileUpload from '../../atoms/FileUpload/FileUpload';

const HeroSearch = () => {
  return (
    <CoreSection classes={styles['hero-search']}>
      <GridContainer data-test="component-hero-search">
        <GridRow>
          <GridColumn colLg="8" classes="mx-auto">
            <div className={styles['hero-search__wrapper']}>
              <Brand classes={styles['hero-search__brand']} />
              <InputField
                name="hero-search"
                type="text"
                placeholder="Enter a search term. e.g. HTML"
              />
            </div>
          </GridColumn>
        </GridRow>
      </GridContainer>
    </CoreSection>
  );
};

export default HeroSearch;
