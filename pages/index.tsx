import { motion } from "framer-motion";
import type { NextPage } from "next";
import HeroSection from "../components/Home/HeroSection";
import ProjectsSection from "../components/Home/ProjectsSection";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Home: NextPage = () => {
  return (
    <motion.div
      key="home"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 1, type: "easeInOut" }}
    >
      <HeroSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default Home;
