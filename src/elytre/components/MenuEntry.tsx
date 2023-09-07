import React from 'react';

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
        <a href={entry.href} target="_blank" rel="noopener noreferrer">
          {entry.label}
        </a>
      ) : (
        <a href={entry.href}>{entry.label}</a>
      )}
    </li>
  );
}
