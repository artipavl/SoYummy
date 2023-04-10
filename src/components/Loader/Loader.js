import { CirclesWithBar } from 'react-loader-spinner';

export const Loader = ({width, height}) => {
  return (
    <>
      <CirclesWithBar
        height={height ? height : '100'}
        width={width ? width : '100'}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#8BAA36"
        innerCircleColor="#3E4462"
        barColor="#1E1F28"
        ariaLabel="circles-with-bar-loading"
      />
    </>
  );
};
