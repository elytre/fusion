import { CustomPage } from '@/components/CustomPage';
import { getCustomPageBySlug } from "@/lib/api/pages";

export default function HomePage() {
  const homePage = getCustomPageBySlug('home');
  return <CustomPage page={homePage} />
}
