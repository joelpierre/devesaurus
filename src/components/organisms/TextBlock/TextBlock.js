import React from 'react';
import PropTypes from 'prop-types';

const TextBlock = ({ module, pageTheme }) => {
  return (
    <section
      data-test="component-text-block"
      className={`primary-main__section theme--${module.theme ? module.theme : pageTheme} text-block`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="flex">
            <p className="text-block__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa illo ipsam magnam nulla optio
              pariatur qui quidem rem! Assumenda deleniti explicabo placeat rem. Dolores eos facere praesentium ullam
              unde!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

TextBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.oneOf(['brand', 'alpha', 'beta', 'tint-alpha', 'tint-beta', 'tint-omega', 'tint-gamma', 'tint-psi']).isRequired,
};

export default TextBlock;
