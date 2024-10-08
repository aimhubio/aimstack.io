import { DemosStyle, DemosList, DemosItem } from './Demos.style';
import { Text, Container } from 'styles/foundations';
import React from 'react';
import demosList from './demosList';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

const Demos = () => {
  return (
    <DemosStyle id="demos">
      <Container>
        <Text as="h2" size={9}  css={{ textAlign: 'center', marginBottom: '$5' }}>
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
          <img referrerPolicy="no-referrer-when-downgrade"
           src="https://static.scarf.sh/a.png?x-pxid=8b1927ba-96ec-4c48-9ee9-6037a9b3dbe5"/>
        </Text>
        <DemosList>
          {demosList.map(({ title, description, name, url, imgSrc }) => {
            return (
              <DemosItem key={name}>
                <Link href={url} target="_blank">
                  <ExportedImage
                    className="img"
                    src={imgSrc}
                    alt="AimStack"
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
