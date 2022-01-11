import { motion, MotionProps, Variants } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Logo from "../components/Logo";

const page_variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const parent_animation_props: MotionProps = {
  initial: "initial",
  animate: "animate",
  transition: { staggerChildren: 0.03, delayChildren: 0.3 },
};

const item_variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const Contacts: NextPage = () => {
  const router = useRouter();

  return (
    <motion.div
      key="contacts"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={page_variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      <div className="contacts">
        <header>
          <button className="contacts__back" onClick={() => router.back()}>
            <Logo className="contacts__logo" />
          </button>
        </header>
        <main className="contacts__main">
          <motion.div {...parent_animation_props} className="contacts__info">
            <motion.p variants={item_variants}>
              Cвяжись со мной по электронной почте:
            </motion.p>
            <motion.p variants={item_variants} className="contacts__accent">
              evgenyrov.me@gmail.com
            </motion.p>
            <motion.p variants={item_variants}>
              Или оставь сообщение заполнив форму.
            </motion.p>
          </motion.div>
          <motion.form
            {...parent_animation_props}
            action="/"
            name="contact"
            method="POST"
            data-netlify="true"
            className="contacts__form"
            onSubmit={() => alert("Сообщение успешно отправлено.")}
          >
            <motion.input
              variants={item_variants}
              type="hidden"
              name="form-name"
              value="contact"
            />
            <motion.label variants={item_variants} htmlFor="name">
              Имя:
            </motion.label>
            <motion.input
              variants={item_variants}
              type="text"
              name="name"
              className="contacts__input"
              id="name"
              required
            />
            <motion.label variants={item_variants} htmlFor="email">
              Email:
            </motion.label>
            <motion.input
              variants={item_variants}
              type="text"
              name="email"
              className="contacts__input"
              id="email"
              required
            />
            <motion.label variants={item_variants} htmlFor="message">
              Сообщение:
            </motion.label>
            <motion.textarea
              variants={item_variants}
              name="message"
              className="contacts__input contacts__input--size-extended"
              id="message"
              required
            />
            <motion.button
              variants={item_variants}
              className="contacts__input contacts__input--type-submit"
              type="submit"
            >
              Отправить
            </motion.button>
          </motion.form>
        </main>
      </div>
    </motion.div>
  );
};

export default Contacts;
