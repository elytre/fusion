export function formatForMetaDescription(text: string | undefined): string {
  if (!text) {
    return '';
  }

  return text.replace(/(\r\n|\n|\r)/gm, "").substring(0, 150) + '...';
}
