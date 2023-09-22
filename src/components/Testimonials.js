import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";
import parse from "html-react-parser";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export default function Testimonials({ pages }) {
  return (
    <div className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-md leading-8 text-[#A4A4A4]">Testimonials</p>
          <h2
            className={`${playfair_display.className} mb-12 text-3xl font-bold text-[#333333] sm:text-4xl`}
            style={{ lineHeight: "1.5" }}
          >
            What Our Customers Are Saying
          </h2>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:grid sm:grid-cols-3">
            {pages.map((page) => (
              <div key={page.id} className="sm:p-4">
                <figure className="rounded-2xl bg-white p-8 mb-8 text-sm leading-6">
                  <figcaption className="flex items-center gap-x-4">
                    <div className="relative h-10 w-10">
                      <Image
                        src={page.x_featured_media}
                        alt={page.title.rendered}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {page.title.rendered}
                      </div>
                      <div className="text-[#999999]">Manila, Philippines</div>
                    </div>
                  </figcaption>
                  <blockquote className="pt-8 text-[#999999]">
                    {parse(page.content.rendered)}
                  </blockquote>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            type="button"
            class="text-gray-200 bg-[#006D5B] font-medium text-sm px-4 py-3 text-center hover:bg-[#FFFF99] hover:text-[#006D5B]"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
