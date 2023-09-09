import React from 'react';
import Link from 'next/link';

export type MenuEntryType = {
  label: string;
  href: string;
};

type MenuEntryProps = {
  entry: MenuEntryType;
};

export default function MenuEntry({
  entry,
}: MenuEntryProps): React.ReactElement {
  return (
    <li className="MenuEntry">
      {entry.href.match(/^http(s)?:\/\//) ? (
        <Link href={entry.href} target="_blank" rel="noopener noreferrer">
          {entry.label}
        </Link>
      ) : (
        <Link href={entry.href}>{entry.label}</Link>
      )}
    </li>
  );
}
