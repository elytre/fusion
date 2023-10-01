import { TextBlockType } from "@/types";
import markdownToHtml from "@/lib/markdown-to-html";

export async function TextBlock({block}: { block: TextBlockType }) {
  const htmlContent = await markdownToHtml(block.text);

  return <div className="TextBlock">
    {block.title && <h1 className="TextBlock__title">{block.title}</h1>}
    <div className="TextBlock__content" dangerouslySetInnerHTML={{__html: htmlContent}}/>
  </div>
}
