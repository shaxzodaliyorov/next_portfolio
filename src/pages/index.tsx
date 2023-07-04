import { About, Hero } from "@/components";
import { Navbar } from "@/layouts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.svg" />
        <meta
          name="keyword"
          content="shaxzod aliyorov, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, Shaxzod , Shaxzod  academy, bepul dasturlash, rezyume yozish, portfolio, Shaxzod  javascript, Shaxzod  raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida"
        />
        <meta name="author" content="Shaxzod Aliyorov" />
        <meta
          name="description"
          content="Free programming lessons and projects, exercises to strengthen algorithms. Ready-made templates, personal profile portfolio and resume. Learning JavaScript related technologies. Shaxzod "
        />
        <meta property="og:title" content="Shaxzod | Dasturlash kursi" />
        <meta
          property="og:description"
          content="Free programming lessons and projects, exercises to strengthen algorithms. Ready-made templates, personal profile portfolio and resume. Learning JavaScript related technologies. Shaxzod "
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:locale" content="uz_UZ" />
        <meta name="twitter:title" content="Shaxzod | Dasturlash kursi" />
        <meta name="twitter:image" content="/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="shaxzod aliyorov, dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida, Shaxzod , Shaxzod  academy, bepul dasturlash, rezyume yozish, portfolio, Shaxzod  javascript, Shaxzod  raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida"
        />
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
