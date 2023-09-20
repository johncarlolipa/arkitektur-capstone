import About from "@/components/About";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Arkitektur | Homepage</title>
      </Head>
      <Services />
      <About />
      <Process />
      <Testimonials />
    </div>
  );
}
