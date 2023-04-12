import MainTitle from 'components/MainTitle/MainTitle';

import { Content, Page, Section } from './Verification.styled';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getVerificationUser } from 'api/serviseApi';
import { Loader } from 'components/Loader/Loader';
import { LoaderDiv } from 'components/IngredientsShoppingList/IngredientsShoppingList.styled';
import { useMemo } from 'react';

const Verification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useMemo(() => {
    setLoading(false);
    getVerificationUser(id)
      .then(() => {
        setLoading(true);
      })
      .catch(e => {
        setError(e);
      })
      .finally(() => {
        setLoading(true);
      });
  }, [id]);

  return (
    <Page>
      <Section>
        <MainTitle text="Mail verification status" />
        {loading && error !== null && (
          <Content>
            <h2>Email not found</h2>
          </Content>
        )}
        {loading && error === null && (
          <Content>
            <h2>Mail verification was successful</h2>
            <Link to="/">Link to the main page</Link>
          </Content>
        )}
        <LoaderDiv>{!loading && <Loader />}</LoaderDiv>
      </Section>
    </Page>
  );
};

export default Verification;
