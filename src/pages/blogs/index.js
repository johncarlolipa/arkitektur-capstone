import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import CTA from "@/components/CTA";

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
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />



        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they're still in stock.
          </p>
          <a
            href="#"
            className="text-gray-200 bg-[#006D5B] font-medium text-sm mt-8 px-4 py-3 text-center hover:bg-[#FFFF99] hover:text-[#006D5B]"
          >
            Read Our Stories
          </a>
        </div>
      </div>

      <main>
        <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 py-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {blogs.map((post) => (
              <a key={post.id} href={post.id} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src={post.x_featured_media}
                    alt={post.title.rendered}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{post.x_author}</h3>
                <p className="mt-2 text-sm text-gray-500">{post.title.rendered}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}
