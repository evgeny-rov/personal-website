import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/Home/HeroSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import { PROFILE_PIC_URL } from "../data/profile";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Евгений Родионов - Frontend разработчик</title>
        <meta
          name="description"
          content="Любимый фронтендер твоего любимого фронтендера"
        />
        <meta property="og:image" content={PROFILE_PIC_URL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
