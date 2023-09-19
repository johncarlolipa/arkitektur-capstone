import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
export const getStaticProps = async () => {
  const res = await fetch(
    "https://dev-arkitektur-headless.pantheonsite.io//wp-json/wp/v2/posts"
  );
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

export default function blogs({ blogs }) {
  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map((post) => (
        <div key={post.id}>
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <h3>{post.title.rendered}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
