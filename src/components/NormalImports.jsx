import React from 'react';
import img1 from '../pics/img1.jpg';
import img2 from '../pics/img2.jpg';

const NormalImports = () => {
  return (
    <>
      <h1>Normal imports from inside the src/pics folder</h1>
      <section>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
      </section>
    </>
  );
};

export default NormalImports;
