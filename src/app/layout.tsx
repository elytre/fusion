import './globals.css'
import '../../_site/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/elytre/components/Header";
import Menu from "@/elytre/components/Menu";
import Footer from "@/elytre/components/Footer";
import React from "react";

import { getSiteConfig } from '@/elytre/lib/user-files';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fusion',
  description: 'Le site de la collection Fusion, par les éditions L\'Atalante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const site = getSiteConfig();

  return (
    <html lang="fr">
      <head>
        <meta property="og:site_name" content={site.title} />
        <meta property="og:title" content={site.title} />
      </head>
      <body className={inter.className}>
        <div className="ElytreSite">
          <Header />
          {site.menus?.nav && <Menu entries={site.menus.nav} />}
          <main className="Main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
