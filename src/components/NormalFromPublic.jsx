import React from 'react';

//When accessing the public folder no require is necessary. Just the ./path in quotes

const NormalFromPublic = () => {
  return (
    <>
      <h1>Normal display direct from the public folder</h1>
      <section>
        <img src='./img5.jpg' alt='' />
        <img src='./img6.jpg' alt='' />
      </section>
    </>
  );
};

export default NormalFromPublic;
