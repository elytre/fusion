import Image from "next/image";

import { NewsPost } from "@/types";

type NewsPostProps = {
  post: NewsPost;
};

export function NewsPost({post}: NewsPostProps) {
  const formattedDate = new Intl.DateTimeFormat('fr-FR').format(post.date);

  return <article className="news">
    <div className="news-illustration">
      <Image
        src={require(`../../_site/images/news/${post.image}`)}
        alt=""
        role="presentation"
        className="news-illustration-image"
      />
    </div>
    <h1 className="news-title">
      {post.title}
    </h1>
    <p className="news-date">
      <time dateTime="2020-07-28">{formattedDate}</time>
    </p>
    <div className="news-body" dangerouslySetInnerHTML={{__html: post.content}}/>
  </article>;
}
