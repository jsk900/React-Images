import srcData from '../data/srcData';

const RequireFromDataFile = () => {
  const imageList = srcData.map((pic) => (
    <img key={pic.id} src={pic.img} alt='' />
  ));

  return (
    <>
      <h1>Requires from data file pointing at the src/pics folder</h1>
      <section>{imageList}</section>
    </>
  );
};

export default RequireFromDataFile;
