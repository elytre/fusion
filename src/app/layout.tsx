import '../../_site/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import React from "react";

import { getSiteConfig } from '@/lib/user-files';

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
        <script async src="https://analytics.umami.is/script.js" data-website-id="7ccdb353-3c41-4a34-afa3-1bbfca74553b"></script>
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
