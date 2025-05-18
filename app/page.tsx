import { BlogPosts } from "app/components/posts";
import siteMetadata from "../siteMetadata.js";

export default function Page() {
  return (
    <section className="flex-grow">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteMetadata.title}
      </h1>
      <p className="mb-4">{siteMetadata.description}</p>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        - {siteMetadata.author}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
