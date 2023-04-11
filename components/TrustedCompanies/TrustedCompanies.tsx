import {
  TrustedCompaniesContainer,
  Slider,
  SliderItem,
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
    <>
      <Text
        align="center"
        size="7"
        css={{ marginBottom: '$6', fontWeight: 700 }}
      >
        Trusted by ML teams from
      </Text>
      <TrustedCompaniesContainer>
        <Slider
          ref={ref}
          className="keen-slider"
          css={{ opacity: state ? 1 : 0, transition: '$main' }}
        >
          {integrationsList.map(({ name }) => {
            return (
              <SliderItem key={name} className="keen-slider__slide">
                <Image
                  src={`/images/static/trusted/${name}.png`}
                  alt={name}
                  width={200}
                  height={150}
                  layout="responsive"
                />
              </SliderItem>
            );
          })}
        </Slider>
      </TrustedCompaniesContainer>
    </>
  );
};

export default TrustedCompanies;
