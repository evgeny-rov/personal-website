const pc_showcase_pic = '/static/projects/pc-showcase.png';
const ts_showcase_pic = '/static/projects/ts-showcase.png';
const ch_showcase_pic = '/static/projects/ch-showcase.png';
const di_showcase_pic = '/static/projects/di-showcase.png';
const in_showcase_pic = '/static/projects/in-showcase.png';

export type ProjectType = {
  id: number;
  codename: string;
  shortname: string;
  title: string;
  description: string;
  stack: string[];
  status: 'cmplt' | 'incmplt' | 'ppln';
  showcase_pic: StaticImageData | string;
  source_url: string;
  demo_url: string | null;
};

export type ProjectsDataType = {
  [codename: string]: ProjectType;
};

const projectsData: ProjectsDataType = {
  peculiar: {
    id: 0,
    codename: 'peculiar',
    shortname: 'pc',
    title: 'Peculiar',
    description:
      'Peculiar — это веб-приложение для анонимных одноразовых чат-сеансов с E2E шифрованием. Вы просто создаете новую сессию и отправляете ссылку другому участнику.',
    stack: ['ts', 'react'],
    status: 'cmplt',
    showcase_pic: pc_showcase_pic,
    source_url: 'https://github.com/evgeny-rov/peculiar',
    demo_url: 'https://peculiar-swart.vercel.app/',
  },
  tasty_softgel: {
    id: 1,
    codename: 'tasty_softgel',
    shortname: 'ts',
    title: 'Tasty Softgel',
    description:
      'Tasty Softgel помогает составить ежедневневный план приема лекарственных средств, напоминает о приеме в нужное время и следит за оставшимся количеством медикаментов.',
    stack: ['ts', 'react native', 'react', 'redux'],
    status: 'cmplt',
    showcase_pic: ts_showcase_pic,
    source_url: 'https://github.com/evgeny-rov/tasty-softgel',
    demo_url: null,
  },
  chompus: {
    id: 2,
    codename: 'chompus',
    shortname: 'ch',
    title: 'The Chompus',
    description:
      'The Chompus - это 2D-браузерная игра в жанре "бесконечный раннер" вдохновленная мини игрой T-Rex Google Chrome.',
    stack: ['phaser', 'workbox', 'pwa'],
    status: 'cmplt',
    showcase_pic: ch_showcase_pic,
    source_url: 'https://github.com/evgeny-rov/the-chompus-game',
    demo_url: 'https://evgeny-rov.github.io/the-chompus-game/',
  },
  in24: {
    id: 3,
    codename: 'in24',
    shortname: 'in',
    title: 'in24',
    description:
      'in24 - это TODO прогрессивное веб приложение, основная цель которого - мотивировать вас выполнять запланированные задачи за отведенное время - 24 часа, по прошествии 24 часов список задач сбрасывается.',
    stack: ['ts', 'react', 'redux', 'styled-components', 'framer motion, i18n'],
    status: 'cmplt',
    showcase_pic: in_showcase_pic,
    source_url: 'https://github.com/evgeny-rov/in24',
    demo_url: 'https://evgeny-rov.github.io/in24/',
  },
  dice: {
    id: 4,
    codename: 'dice',
    shortname: 'di',
    title: '3D Dice Roller',
    description:
      '3D Dice Roller - Бросьте виртуальные 3D-кости в любой ситуации где они могут понадобится, игра или нет, надеюсь на кону не стоит все?',
    stack: ['ts', 'three.js', 'cannon.js'],
    status: 'cmplt',
    showcase_pic: di_showcase_pic,
    source_url: 'https://github.com/evgeny-rov/dice-roller',
    demo_url: 'https://evgeny-rov.github.io/dice-roller/',
  },
};

export const getProjects = () => {
  return Object.values(projectsData);
};

export default projectsData;
