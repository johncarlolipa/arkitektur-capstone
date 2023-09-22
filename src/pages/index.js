import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { getTestimonialsData } from "../../utils/api";
export const getStaticProps = async () => {
  const data = await getTestimonialsData(); // Fetch data using a utility function

  return {
    props: {
      testimonialsData: data,
    },
  };
};

export default function Home({ testimonialsData }) {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Arkitektur | Homepage</title>
      </Head>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials pages={testimonialsData} />
    </div>
  );
}
