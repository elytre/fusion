import { Block } from '@/app/components/blocks/Block';
import { CustomPage } from "@/types";

export function CustomPage({ page }: { page: CustomPage; }) {
  return <div className={`CustomPage page-${page.slug}`}>
    {page.blocks.map(block => <Block key={block.key} block={block}/>)}
  </div>
}
