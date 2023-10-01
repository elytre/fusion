import { Metadata } from 'next';

import { CustomPage } from '@/app/components/CustomPage';

export const metadata: Metadata = {
  title: 'A propos - Fusion',
}

export default function AboutPage() {
  return <CustomPage slug="a-propos" />
}
