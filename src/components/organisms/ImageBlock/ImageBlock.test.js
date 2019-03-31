import React from 'react';

function ImageBlock({ module, pageTheme }) {
  return (
    <section className={`primary-main__section theme--${module.theme} image-block`}>
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

export default ImageBlock;
