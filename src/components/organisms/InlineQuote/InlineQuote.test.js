import React from 'react';

function InlineQuote({ module, pageTheme }) {
  return (
    <section className={`primary-main__section theme--${module.theme} inline-quote`}>
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

export default InlineQuote;
