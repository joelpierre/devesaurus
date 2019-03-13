import React from 'react';

function CtaBanner({ module, pageTheme }) {
  if (module.__typename !== 'cta_banner') {
    return null;
  }
  console.log(module);

  return (

    <section className={`primary-main__section theme--${module.theme} cta-banner`}>
      <div className="container-fluid">
        <div className="row">
          <div className="flex text-center">
            <h2>
              {module.__typename}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
