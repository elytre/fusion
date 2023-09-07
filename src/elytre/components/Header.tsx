import React from 'react';

import { getSiteConfig } from '../lib/user-files';
import Menu from './Menu';
import SearchForm from './SearchForm';

const site = getSiteConfig();

export default function Header(): React.ReactElement {
  return (
    <header className="Header">
      <h1 className="Header-site-title">
        <a href="/">{site.title}</a>
      </h1>
      <SearchForm />
      {site.menus?.header && <Menu entries={site.menus.header} />}
    </header>
  );
}
