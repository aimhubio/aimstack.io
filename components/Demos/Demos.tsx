import { DemosStyle, DemosList, DemosItem } from './Demos.style';
import { Text, Container } from 'styles/foundations';
import React from 'react';
import demosList from './demosList';
import Image from 'next/image';
import Link from 'next/link';

const Demos = () => {
  return (
    <DemosStyle id="demos">
      <Container>
        <Text as="h2" size={9} css={{ textAlign: 'center' }}>
          Demos
        </Text>
        <Text
          as="p"
          size={4}
          css={{
            margin: '0 auto 60px',
            textAlign: 'center',
            maxWidth: '560px',
            '@bp1': { marginBottom: '44px' },
          }}
        >
          Play with Aim before installing it! Check out our demos to see the
          full functionality
        </Text>
        <DemosList>
          {demosList.map(({ title, description, name, url }) => {
            return (
              <DemosItem key={name}>
                <Link href={url} target="_blank">
                  <Image
                    className="img"
                    src={`/images/static/demos/${name}.png`}
                    alt="AimStack"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                  <div className="inner">
                    <Text
                      as="h4"
                      size={4}
                      css={{ marginBottom: '$2', fontWeight: '$4' }}
                    >
                      {title}
                    </Text>
                    <Text size={2}>{description}</Text>
                  </div>
                </Link>
              </DemosItem>
            );
          })}
        </DemosList>
      </Container>
    </DemosStyle>
  );
};

export default Demos;
