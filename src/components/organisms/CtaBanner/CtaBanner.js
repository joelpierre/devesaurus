import React from 'react';

function CtaBanner({ module, pageTheme }) {
  return (

    <section className={`primary-main__section theme--${module.theme} cta-banner`}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex text-center">
            <h2>
              {module.acf_fc_layout}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
