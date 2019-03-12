import React from 'react';

function InlineQuote({ module }) {
  if (module.__typename !== 'inline_quote') {
    return null;
  }

  return (
    <section className={`primary-main__section theme--${module.page_theme} inline-quote`}>
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