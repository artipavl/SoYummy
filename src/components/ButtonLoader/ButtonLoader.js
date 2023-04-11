import { RotatingLines } from 'react-loader-spinner';

const ButtonLoader = () => {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="0.75"
      width="25"
      visible={true}
    />
  );
};

export default ButtonLoader;
