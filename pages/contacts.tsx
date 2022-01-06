import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const Contacts: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Сообщение успешно отправлено");
    router.back();
  };

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
      <div className="contacts">
        <header className="contacts__header">
          <button onClick={() => router.back()}>
            <Image
              src="/static/logo.png"
              className="contacts__back"
              alt="go back logo"
              layout="fill"
            />
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
            onSubmit={handleSubmit}
          >
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
    </div>
  );
};

export default Contacts;
