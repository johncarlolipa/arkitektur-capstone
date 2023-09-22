import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import CTA from "@/components/CTA";

const inter = Inter({ subsets: ["latin"] });
const playfair_display = Playfair_Display({ subsets: ["latin"] });

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
    <div className={`${inter.className} bg-white pb-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-md leading-8 text-[#A4A4A4]">From the Blog</p>
          <h2
            className={`${playfair_display.className} mb-12 text-3xl font-bold text-[#333333] sm:text-4xl`}
            style={{ lineHeight: "1.5" }}
          >
            Exploring Design and Inspiring Visions
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.x_featured_media}
                alt={post.title.rendered}
                width={1000}
                height={1000}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.date} className="mr-8">
                  {new Date(post.date).toDateString()}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      src={post.x_featured_media}
                      alt={post.title.rendered}
                      width={100}
                      height={100}
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.x_author}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/blogs/${post.id}`} key={post.id}>
                  <span className="absolute inset-0" />
                  {post.title.rendered}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
