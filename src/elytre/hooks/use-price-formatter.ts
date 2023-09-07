import { Locale } from '../types';

export default function usePriceFormatter(price: number): string {
  const formatter = new Intl.NumberFormat('fr', {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(price);
}
