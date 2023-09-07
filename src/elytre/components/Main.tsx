import React from 'react';

import HomeView from './HomeView';
import ProductView from './ProductView';
import SearchResultsView from './SearchResultsView';
import PageView from './PageView';
import Error404View from './Error404View';

export default function Main(): React.ReactElement {
  return (
    <main className="Main">
      <HomeView />
    </main>
  );
}
