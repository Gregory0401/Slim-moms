import { BallTriangle } from 'react-loader-spinner';
import { LoaderWrp } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrp>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#FC842D"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </LoaderWrp>
  );
};

export default Loader;
