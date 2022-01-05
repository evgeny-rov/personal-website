import type { NextPage } from "next";
import Head from "next/head";
import MainThreeScene from "../three/MainThreeScene";

import Image from "next/image";
import ScrambledText from "../components/ScrambledText";
import { getProjects, ProjectType } from "../data/projectsData";
import { useEffect, useState } from "react";

const MY_GITHUB_URL = "https://github.com/evgeny-rov";

const convertProjectIdToSubtext = (id: number) => {
  return "prj." + id.toString().padStart(2, "0");
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const loadHandler = (e?: Event) => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      loadHandler();
    } else {
      document.addEventListener("readystatechange", loadHandler);
    }

    return () => {
      document.removeEventListener("load", loadHandler);
    };
  }, []);

  return (
    <section className="hero">
      {!isLoaded && <div className="curtain"></div>}
      <header className="hero__header">
        <a href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a href="">контакты</a>
      </header>
      <div className="hero__foreground">
        <main className="profile">
          <div className="profile__picture">
            <Image
              src={"/static/hero_pic.png"}
              alt="profile picture"
              quality={50}
              priority
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="profile__info">
            <div className="profile__bio">
              <h3 className="profile__name">евгений родионов</h3>
              <span className="profile__title">Frontend разработчик</span>
            </div>
            <h1 className="profile__headline">создаю ui даже во сне</h1>
            <span>
              <ScrambledText
                shouldRepeat
                duration={90}
                classNames={{
                  real: "scrambled-text",
                  filler: "scrambled-text scrambled-text--type-filler",
                }}
                interval={3000}
                variability={0.3}
                sentences={["проекты", "vvv"]}
              />
            </span>
          </div>
        </main>
      </div>
      <div className="hero__background">
        <MainThreeScene />
      </div>
    </section>
  );
};

const Project = (project: ProjectType) => {
  return (
    <div className="project">
      <div className="project__showcase">
        <Image
          src={project.showcase_pic}
          alt={project.title}
          width={2000}
          height={2000}
          quality={50}
          priority
          objectFit="contain"
        />
      </div>
      <div className="project__details">
        <span className="project__brief">
          {convertProjectIdToSubtext(project.id)}
        </span>
        <h1 className="project__title">{project.title}</h1>
        <span className="project__description">{project.description}</span>
        <div className="project__actions">
          <a
            className="button"
            href={project.source_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="button_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            source код
          </a>
          {project.demo_url && (
            <a
              className="button button--type-inverted"
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              демо
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = getProjects();

  return (
    <section className="projects">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

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
