import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/Home/HeroSection";
import ProjectsSection from "../components/Home/ProjectsSection";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Евгений Родионов - Frontend разработчик</title>
        <meta
          name="description"
          content="Любимый фронтендер твоего любимого фронтендера"
        />
        <meta property="og:image" content="/static/hero_pic.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
