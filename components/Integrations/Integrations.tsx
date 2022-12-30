import { IntegrationsStyle, Slider, SliderItem } from './Integrations.style';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import integrationsList from './inetgrationsList';
import { useMemo, useState } from 'react';

const Integrations = () => {
  const [state, setState] = useState(false);

  const animation = useMemo(() => {
    return { duration: 10000, easing: (t: number) => t };
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
        slides: { perView: 8, spacing: 120 },
      },
      '(max-width: 1439px)': {
        slides: { perView: 8, spacing: 96 },
      },
      '(max-width: 1199px)': {
        slides: { perView: 7, spacing: 80 },
      },
      '(max-width: 743px)': {
        slides: { perView: 5, spacing: 60 },
      },
      '(max-width: 575px)': {
        slides: { perView: 4, spacing: 60 },
      },
    },
  });

  return (
    <IntegrationsStyle>
      <Slider
        ref={ref}
        className="keen-slider"
        css={{ opacity: state ? 1 : 0, transition: '$main' }}
      >
        {integrationsList.map(({ name, url }) => {
          return (
            <SliderItem
              key={name}
              className="keen-slider__slide"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/images/static/integrations/${name}.png`}
                alt={name}
                width={100}
                height={100}
                layout="responsive"
              />
            </SliderItem>
          );
        })}
      </Slider>
    </IntegrationsStyle>
  );
};

export default Integrations;
