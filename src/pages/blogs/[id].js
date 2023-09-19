import React from "react";

export const getStaticPaths = async () => {
  try {
    const res = await fetch(
      "https://dev-arkitektur-headless.pantheonsite.io//wp-json/wp/v2/posts"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const paths = data.map((post) => {
      return {
        params: { id: post.id.toString() },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  try {
    const res = await fetch(
      `https://dev-arkitektur-headless.pantheonsite.io//wp-json/wp/v2/posts/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch post data");
    }
    const post = await res.json();

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: { post: null },
    };
  }
};

export default function Details({ post }) {
  return (
    <div>
      <h1>Details of the Blog</h1>
      <p>{post.title.rendered}</p>
      <p> {post.x_author}</p>
    </div>
  );
}
