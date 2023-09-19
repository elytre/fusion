import Image from "next/image";

import {NewsPost} from "@/types";
import markdownToHtml from "@/lib/markdown-to-html";
import Link from "next/link";

type NewsPostProps = {
  post: NewsPost;
};

export async function NewsPost({post}: NewsPostProps) {
  const formattedDate = new Intl.DateTimeFormat('fr-FR').format(post.date);
  const htmlContent = await _toHtml(post);

  return <article className="news">
    <div className="news-illustration">
      <Image
        src={post.image}
        alt=""
        role="presentation"
        className="news-illustration-image"
        width="524"
        height="258"
      />
    </div>
    <h1 className="news-title">
      <Link href={`/news/${post.slug}`}>
        {post.title}
      </Link>
    </h1>
    <p className="news-date">
      <time dateTime="2020-07-28">{formattedDate}</time>
    </p>
    <div className="news-body" dangerouslySetInnerHTML={{__html: htmlContent}}/>
  </article>;
}



async function _toHtml(post: NewsPost) {
  if (post.html) {
    return post.content;
  }

  return await markdownToHtml(post.content);
}
