import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Arkitektur | Homepage</title>
      </Head>
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
    </div>
  );
}
