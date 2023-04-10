import Fork from '../../images/icons/fork.svg';
import Knife from '../../images/icons/knife.svg';

import { Wrapp, LoaderImage } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapp>
      <LoaderImage src={Fork} alt="Spinner" />
      <LoaderImage src={Knife} alt="Spinner" />
    </Wrapp>
  );
};
