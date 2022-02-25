import publicData from '../data/publicData';

const RequireFromPublicFile = () => {
  const imageList = publicData.map((pic) => (
    <img key={pic.id} src={pic.img} alt='' />
  ));

  console.log(imageList);

  return (
    <>
      <h1>Requires from data file pointing at the public folder</h1>
      <section>{imageList}</section>
    </>
  );
};

export default RequireFromPublicFile;
