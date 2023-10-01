import { getHomePage } from "@/lib/api/pages";
import { Block } from "@/app/components/blocks/Block";

export default async function HomePage () {
  const homePage = getHomePage();

  return <div className="HomeView home-page">
    {homePage.blocks.map(block => <Block key={block.key} block={block} />)}
  </div>
}
