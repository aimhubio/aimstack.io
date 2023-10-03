import { DemosSection, DemosList, DemosItem } from './Demos.style';
import { Text, Container } from 'styles/foundations';
import React from 'react';
import demosList from './demosList';
import Image from 'next/image';
import Link from 'next/link';

const Demos = () => {
  return (
    <DemosSection id="demos">
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
              <Link href={url} target="_blank">
                <Image
                  className="demo-img"
                  src={imageSrc}
                  alt="AimStack"
                  width={100}
                  height={100}
                  quality={100}
                />
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
