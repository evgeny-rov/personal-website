import Image from "next/image";
import MainThreeScene from "../../three/MainThreeScene";
import ScrambledText from "../../components/ScrambledText";
import Link from "next/link";
import { PROFILE_PIC_URL } from "../../data/profile";
import { motion } from "framer-motion";

const MY_GITHUB_URL = "https://github.com/evgeny-rov";

const HeroSection = () => {
  return (
    <section className="hero">
      <header className="hero__header">
        <a href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <Link href="/contacts">
          <a>контакты</a>
        </Link>
      </header>
      <div className="hero__foreground">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
          }}
          className="profile"
        >
          <div className="profile__picture">
            <Image
              src={PROFILE_PIC_URL}
              alt="profile picture"
              quality={30}
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
            <h1 className="profile__headline">
              превращаю
              <br />
              кофе в web приложения
            </h1>
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
        </motion.main>
      </div>
      <div className="hero__background">
        <MainThreeScene />
      </div>
    </section>
  );
};

export default HeroSection;
