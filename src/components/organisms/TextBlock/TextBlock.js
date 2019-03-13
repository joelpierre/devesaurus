import React from 'react';

function TextBlock({ module, pageTheme }) {
  if (module.__typename !== 'text_block') {
    return null;
  }

  return (
    <section className={`primary-main__section theme--${module.theme} text-block`}>
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
}

export default TextBlock;
