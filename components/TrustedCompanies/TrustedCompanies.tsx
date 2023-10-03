import {
  TrustedCompaniesContainer,
  Slider,
  SliderItem,
  TrustedCompaniesSection,
} from './TrustedCompanies.style';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import integrationsList from './TrustedCompaniesList';
import { Text } from 'styles/foundations';
import { useMemo, useState } from 'react';

const TrustedCompanies = () => {
  const [state, setState] = useState(false);

  const animation = useMemo(() => {
    return { duration: 15000, easing: (t: number) => t };
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 8,
      spacing: 220,
    },
    created(s) {
      setState(true);
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      '(max-width: 1920px)': {
        slides: { perView: 7, spacing: 120 },
      },
      '(max-width: 1439px)': {
        slides: { perView: 6, spacing: 96 },
      },
      '(max-width: 1199px)': {
        slides: { perView: 5, spacing: 80 },
      },
      '(max-width: 743px)': {
        slides: { perView: 4, spacing: 60 },
      },
      '(max-width: 575px)': {
        slides: { perView: 3, spacing: 60 },
      },
    },
  });

  return (
    <TrustedCompaniesContainer>
      <Text
        size="7"
        css={{ marginBottom: '$6', fontWeight: 700, textAlign: 'center' }}
      >
        Trusted by ML teams from
      </Text>
      <TrustedCompaniesSection>
        <Slider
          ref={ref}
          className="keen-slider"
          css={{ opacity: state ? 1 : 0, transition: '$main' }}
        >
          {integrationsList.map(({ name, imgSrc }) => {
            return (
              <SliderItem key={name} className="keen-slider__slide">
                <Image
                  src={imgSrc}
                  alt={name}
                  width={200}
                  height={150}
                  quality={100}
                />
              </SliderItem>
            );
          })}
        </Slider>
      </TrustedCompaniesSection>
    </TrustedCompaniesContainer>
  );
};

export default TrustedCompanies;
