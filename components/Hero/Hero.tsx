import React, { useEffect, useState } from 'react';
import { HeroStyle, HeroContentWrapper } from './Hero.style';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';
import { GITHUB_API } from 'config';
import Image from 'next/image';
// @ts-ignore
import Banner from 'public/images/static/hero/banner.png';

const Hero = () => {
  const [release, setRelease] = useState();

  const getRelease = () => {
    fetch(`${GITHUB_API}releases/latest`)
      .then((res) => res.json())
      .then((res) => {
        const releaseData = res.tag_name.substring(1);
        setRelease(releaseData);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getRelease();
  }, []);

  return (
    <HeroStyle>
      <Container>
        <HeroContentWrapper>
          <div className={'hero-content'}>
            <Text
              as="h1"
              size={9}
              css={{
                marginBottom: '$6',
                width: '100%',
              }}
            >
              An easy-to-use open-source developer framework for end-to-end AI
              observability.
            </Text>
            <Text
              as="p"
              size={3}
              css={{
                marginBottom: '56px',
                width: '100%',
              }}
            >
              Easily create full observability and automation layer for your AI
              Systems - from Data preprocessing to LLM monitoring.
            </Text>
            <div className='hero-button-container'>
              <Button
                variant="outline"
                className={'hero-try-demo'}
                as="a"
                href="#demos"
              >
                Try Demo Now
              </Button>
              <Button
                className={'hero-quick-start'}
                as="a"
                href="https://aimstack.readthedocs.io/en/latest/getting_started/quick_start.html"
                target="_blank"
              >
                Quick Start
              </Button>
            </div>
          </div>
          <Image src={Banner} alt="banner" className={'hero-banner'} />
        </HeroContentWrapper>
      </Container>
    </HeroStyle>
  );
};

export default Hero;
