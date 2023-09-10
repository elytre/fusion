'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Trans from './Trans';
import useTrans from '../hooks/use-trans';

export default function SearchForm(): React.ReactElement {
  const searchParams = useSearchParams();
  const qParam = searchParams.get('q');
  const [query, setQuery] = useState(qParam);

  const { push } = useRouter();
  useEffect(() => {
    if (query !== null) {
      push(`/fr/search?q=${query}`);
    }
  }, [query]);

  return (
    <form action="/search" className="SearchForm">
      <input
        name="query"
        type="search"
        placeholder={useTrans('Search…')}
        className="SearchForm-input"
        value={query ?? ''}
        onChange={({ target }) => setQuery(target.value)}
      />
    </form>
  );
}
