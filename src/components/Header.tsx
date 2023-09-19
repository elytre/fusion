import React, {Suspense} from 'react';
import Link from 'next/link';

import { getSiteConfig } from '@/lib/user-files';
import Menu from './Menu';
import SearchForm from './SearchForm';
import SearchFormPlaceholder from './SearchFormPlaceholder';

const site = getSiteConfig();

export default function Header(): React.ReactElement {
  return (
    <header className="Header">
      <h1 className="Header-site-title">
        <Link href="/">{site.title}</Link>
      </h1>
      <Suspense fallback={<SearchFormPlaceholder />}>
        <SearchForm />
      </Suspense>
      {site.menus?.header && <Menu entries={site.menus.header} />}
    </header>
  );
}
