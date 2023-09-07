"use client";

import React from 'react';

import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

import { getSiteConfig } from '../lib/user-files';

const site = getSiteConfig();

export default function ElytreSite(): React.ReactElement {
  return (
    <>
      <title>{site.title}</title>
      <meta property="og:site_name" content={site.title} />
      <meta property="og:title" content={site.title} />
      <div className="ElytreSite">
        <Header />
        {site.menus?.nav && <Menu entries={site.menus.nav} />}
        <Main />
        <Footer />
      </div>
    </>
  );
}
