import Image from "next/image";
import MainThreeScene from "../../three/MainThreeScene";
import ScrambledText from "../../components/ScrambledText";
import { useEffect, useState } from "react";
import Link from "next/link";

const MY_GITHUB_URL = "https://github.com/evgeny-rov";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = (e?: Event) => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      document.addEventListener("readystatechange", handleLoad);
    }

    return () => {
      document.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section className="hero">
      {!isLoaded && <div className="curtain"></div>}
      <header className="hero__header">
        <a href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <Link href="/contacts">
          <a>контакты</a>
        </Link>
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

export default HeroSection;
