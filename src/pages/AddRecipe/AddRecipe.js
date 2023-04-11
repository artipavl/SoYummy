import { AddRecipeForm } from '../../components/AddRecipeForm/AddRecipeForm';
import MainTitle from 'components/MainTitle/MainTitle';
import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import { SocialLinksContainer } from '../../components/SocialLinks/SocialLinks';

import {
  Page,
  ContentContainer,
  FormContainer,
  SocialLinkWrap,
} from './AppRecipe.styled';
const AddRecipe = () => (
  <>
    <Page>
      <MainTitle text="Add recipe" />
      <ContentContainer>
        <FormContainer>
          <AddRecipeForm />
        </FormContainer>
        <div>
          <SocialLinkWrap>
            <SocialLinksContainer />
          </SocialLinkWrap>
          <PopularRecipe />
        </div>
      </ContentContainer>
    </Page>
  </>
);

export default AddRecipe;
