import { motion, Variants } from "framer-motion";
import type { NextPage } from "next";
import HeroSection from "../components/Home/HeroSection";
import ProjectsSection from "../components/Home/ProjectsSection";

const page_variants: Variants = {
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
      variants={page_variants}
      transition={{ duration: 1, type: "easeInOut" }}
    >
      <HeroSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default Home;
