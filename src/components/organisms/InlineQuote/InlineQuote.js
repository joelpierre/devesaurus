import React from 'react';
import PropTypes from 'prop-types';

function InlineQuote({ module, pageTheme }) {
  return (
    <section className={`primary-main__section theme--${module.theme ? module.theme : pageTheme} inline-quote`}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex">
            <blockquote>
              This is a blockquote
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

InlineQuote.propTypes = {
  module: PropTypes.instanceOf(Object).isRequired,
  pageTheme: PropTypes.string.isRequired,
};

export default InlineQuote;
