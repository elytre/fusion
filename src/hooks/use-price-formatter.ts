export default function usePriceFormatter(price: number): string {
  const locale = "fr";

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(price);
}
