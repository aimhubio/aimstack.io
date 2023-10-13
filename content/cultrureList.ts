import ShieldImage from 'public/images/static/about-us/shield.svg';
import MessageImage from 'public/images/static/about-us/message.svg';
import RunImage from 'public/images/static/about-us/run.svg';
import SmileImage from 'public/images/static/about-us/smile.svg';
import { StaticImageData } from 'next/image';

export interface ICultureList {
  image: StaticImageData;
  title: string;
  description: string;
}

export const cultureList = [
  {
    image: ShieldImage,
    title: 'Output-driven',
    description:
      'We do what we promised each other, customers, users, and investors. While effort is recognized, it’s not regarded equally. We care about what you achieve.',
  },
  {
    image: MessageImage,
    title: 'Community-driven',
    description:
      'We are building Aim as a result of an in-depth collaboration with the users and many teams in the industry.',
  },
  {
    image: RunImage,
    title: 'Move Quickly & Iterate',
    description:
      'We believe speed is a competitive advantage as a company. We never shy away from asking: “Could we do this faster?”',
  },
  {
    image: SmileImage,
    title: 'Kindness and fun',
    description:
      'Kindness and fun help us foster a positive and productive work environment where we feel valued and motivated.',
  },
];
