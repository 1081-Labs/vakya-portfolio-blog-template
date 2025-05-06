import { BlogPosts } from "app/components/posts";
import siteMetadata from "../siteMetadata.js";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {siteMetadata.title}
      </h1>
      <p className="mb-4">{siteMetadata.description}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
