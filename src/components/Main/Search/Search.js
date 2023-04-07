import { RoundedButton } from 'reusableComponents/Btn/Btn';
import {
  BtnSearchBox,
  SearchForm,
  SearchInput,
} from './Search.styled';

export const Search = () => {
  return (
    <>
      <SearchForm>
        <SearchInput type="search" />
        <BtnSearchBox>
          <RoundedButton to={'/main'} title={'Search'} />
        </BtnSearchBox>
      </SearchForm>
    </>
  );
};
