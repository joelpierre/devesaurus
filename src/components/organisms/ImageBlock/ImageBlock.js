import React from 'react';
import PropTypes from 'prop-types';

function ImageBlock({ module, pageTheme }) {
  return (
    <section
      data-test="component-image-block"
      className={`primary-main__section theme--${module.theme ? module.theme : pageTheme} image-block`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="flex text-center">
            <h2>Image Block</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

ImageBlock.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.oneOf(['brand', 'alpha', 'beta', 'tint-alpha', 'tint-beta', 'tint-omega', 'tint-gamma', 'tint-psi']).isRequired,
};

export default ImageBlock;
