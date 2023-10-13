import React from 'react';
import {
  DemosSection,
  DemosList,
  DemosItem,
  DemosDotsImg,
  DemoImg,
} from './Demos.style';
import { Text, Container } from 'styles/foundations';
import demosList from './demosList';
import Link from 'next/link';

import DemosDots from 'public/images/static/demos/dots.svg';

const Demos = () => {
  return (
    <DemosSection id="demos">
      <DemosDotsImg src={DemosDots} alt={'demos dots'} fill />
      <Container>
        <Text as="h2" size={9} className="demos-title">
          Try Aim in action with live demos
        </Text>
        <Text size={3} className="demos-subtitle">
          Check out live Aim demos NOW to see it in action.
        </Text>
        <DemosList>
          {demosList.map(({ title, description, name, url, imageSrc }) => (
            <DemosItem key={name}>
              <Link href={url} target="_blank" rel="external">
                <DemoImg src={imageSrc} alt="AimStack" placeholder={'blur'} />
                <div className="demo-inner">
                  <Text size={4} css={{ marginBottom: '$2', fontWeight: '$4' }}>
                    {title}
                  </Text>
                  <Text size={2}>{description}</Text>
                </div>
              </Link>
            </DemosItem>
          ))}
        </DemosList>
      </Container>
    </DemosSection>
  );
};

export default Demos;
