import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import useTrans from '../hooks/use-trans';

export default function SearchFormPlaceholder(): React.ReactElement {
  return (
    <form action="/search" className="SearchForm">
      <input
        name="query"
        type="search"
        placeholder={useTrans('Search…')}
        className="SearchForm-input"
      />
    </form>
  );
}
