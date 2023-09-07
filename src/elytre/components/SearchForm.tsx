import React, { useState } from 'react';

import Trans from './Trans';
import useTrans from '../hooks/use-trans';

export default function SearchForm(): React.ReactElement {
  const [query, setQuery] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // history.push(`/fr/search?q=${query}`);
  }

  return (
    <form action="/search" className="SearchForm" onSubmit={handleSubmit}>
      <input
        name="query"
        type="search"
        placeholder={useTrans('Search…')}
        className="SearchForm-input"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button type="submit">
        <Trans>Search</Trans>
      </button>
    </form>
  );
}
