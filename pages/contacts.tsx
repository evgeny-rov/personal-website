import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Logo from "../components/Logo";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Contacts: NextPage = () => {
  const router = useRouter();

  return (
    <motion.div
      key="contacts"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
    >
      <div className="contacts">
        <header className="contacts__header">
          <button className="contacts__back" onClick={() => router.back()}>
            <Logo className="contacts__logo" />
          </button>
        </header>
        <main className="contacts__main">
          <div className="contacts__info">
            <p>Cвяжись со мной по электронной почте:</p>
            <p className="contacts__accent">evgenyrov.me@gmail.com</p>
            <p>Или оставь сообщение заполнив форму.</p>
          </div>
          <form
            action="/"
            name="contact"
            method="POST"
            data-netlify="true"
            className="contacts__form"
            onSubmit={() => alert("Сообщение успешно отправлено.")}
          >
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              name="name"
              className="contacts__input"
              id="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="contacts__input"
              id="email"
              required
            />
            <label htmlFor="message">Сообщение:</label>
            <textarea
              name="message"
              className="contacts__input contacts__input--size-extended"
              id="message"
              required
            />
            <button
              className="contacts__input contacts__input--type-submit"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </main>
      </div>
    </motion.div>
  );
};

export default Contacts;
