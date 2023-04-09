import { BtnDel } from './ButtonDelete.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const ButtonDel = ({ battonDel }) => {
  return (
    <>
      <BtnDel battonDel={battonDel}>
        <RiDeleteBinLine />
      </BtnDel>
    </>
  );
};
