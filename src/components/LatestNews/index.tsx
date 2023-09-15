import React from "react";
import Button from "../Button";
import Link from "@docusaurus/Link";

export default function LatestNews({ recentPosts }) {
  const {
    metadata: { title, formattedDate, date, frontMatter, permalink },
    Preview,
  } = recentPosts[0];

  return (
    <section className="flex flex-col justify-center w-full py-10 md:py-20 px-4 bg-gradient-to-b from-white dark:from-blue-900 to-transparent">
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12">
          Latest News
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to={permalink}>
            <img src={frontMatter.image} alt={title} />
          </Link>
          <div className="flex flex-col items-start">
            <time
              dateTime={date}
              itemProp="datePublished"
              className="text-yellow-700 dark:text-yellow-500 font-bold uppercase"
            >
              {formattedDate}
            </time>
            <h4 className="text-3xl font-bold leading-snug mt-2">
              <Link href={permalink}>{title}</Link>
            </h4>

            <div className="prose dark:prose-invert line-clamp-3 mt-2 mb-4 text-gray-600 dark:text-gray-500">
              <Preview />
            </div>
            <Button variant="secondary" href={permalink}>
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
