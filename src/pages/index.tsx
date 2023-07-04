import { About, Hero } from "@/components";
import { Navbar } from "@/layouts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Shaxzod | Aliyorov</title>
      </Head>
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
    </>
  );
}
