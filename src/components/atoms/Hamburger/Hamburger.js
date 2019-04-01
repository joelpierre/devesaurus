import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({ company }) => {
  return (
    <div data-test="component-hamburger" className="hamburger">
      <span className="hamburger__line"/>
      <span className="hamburger__line"/>
      <span className="hamburger__line"/>
      <span className="hamburger__company">
        {company}
      </span>
    </div>
  );
};

Hamburger.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Hamburger;
