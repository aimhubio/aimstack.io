import React, { useEffect, useState } from 'react';
import { HeroStyle, HeroContent } from './Hero.style';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';
import { GITHUB_API } from 'config';

const Hero = () => {
  const [release, setRelease] = useState();

  const getRelease = () => {
    fetch(`${GITHUB_API}releases/latest`)
      .then(res => res.json())
      .then(res => {
        const releaseData = res.tag_name.substring(1);
        setRelease(releaseData);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getRelease();
  }, []);

  return (
    <HeroStyle>
      <Container>
        <HeroContent>
          <Text as='h1' size={10} css={{ marginBottom: '$6' }}>
            An easy-to-use & supercharged open-source experiment tracker
          </Text>
          <Text as='p' size={4} css={{ marginBottom: '48px' }}>
            Aim logs your training runs, enables a beautiful UI to compare them
            and an API to query them programmatically.
          </Text>
          <Button
            css={{ marginBottom: '$12' }}
            as='a'
            href='https://github.com/aimhubio/aim'
            target='_blank'
          >
            Check out our Github
          </Button>
          {
            release &&
            <Button
              className='github-btn'
              as='a'
              variant='outline'
              size={2}
              href='https://aimstack.io/aim-3-10-release-catboost-integration/'
              target='_blank'
            >
              Aim release <strong>{release}</strong>
            </Button>
          }
        </HeroContent>
      </Container>
    </HeroStyle>
  );
};

export default Hero;
