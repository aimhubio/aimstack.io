import React from 'react';
import {
  HeroSection,
  HeroContentWrapper,
  HeroBannerImg,
  HeroBgDots,
  HeroBg,
} from './Hero.style';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';
import Aim4 from 'public/images/static/hero/aim4.png';
import BgDots from 'public/images/static/hero/dots.png';
import Bg from 'public/images/static/hero/bg.png';
import { ImagePlaceholder } from 'utils';

const Hero = () => {
  // const [release, setRelease] = useState();
  //
  // const getRelease = () => {
  //   fetch(`${GITHUB_API}releases/latest`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const releaseData = res.tag_name.substring(1);
  //       setRelease(releaseData);
  //     })
  //     .catch((e) => console.log(e));
  // };
  //
  // useEffect(() => {
  //   getRelease();
  // }, []);

  return (
    <HeroSection>
      <HeroBg
        src={Bg}
        alt="bg"
        fill={true}
        loading={'lazy'}
      />
      <HeroBgDots
        src={BgDots}
        alt="bgDots"
        fill={true}
        loading={'lazy'}
      />
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
            <div className="hero-button-container">
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
          <HeroBannerImg
            src={Aim4}
            alt="banner"
            width={866}
            height={540}
            priority={true}
            placeholder={'blur'}
            blurDataURL={ImagePlaceholder}
          />
        </HeroContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
