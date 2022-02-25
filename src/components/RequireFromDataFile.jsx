import srcData from '../data/srcData';

const RequireFromDataFile = () => {
  const imageList = srcData.map((pic) => (
    <img key={pic.id} src={pic.img} alt='' />
  ));

  return <section>{imageList}</section>;
};

export default RequireFromDataFile;
