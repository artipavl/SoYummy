import React, { useState } from 'react';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
} from './Search.styled.js';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = `search?query=${searchTerm}`;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchContainer>
        <SearchValue
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchContainer>
    </Form>
  );
};
