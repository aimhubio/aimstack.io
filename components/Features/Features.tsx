import React from 'react';
import {
  FeaturesStyle,
  StepRow,
  Left,
  Right,
  ButtonLink,
} from './Features.style';
import { Text, Container } from 'styles/foundations';
import { Icon } from 'components/UIkit';
import stepsList from './stepsConfig';
import Image from 'next/image';

const Features = () => {
  return (
    <FeaturesStyle id="features">
      <Container>
        <Text as="h2" size={9} className="title">
          Why use Aim?
        </Text>
        {stepsList.map(({ name, title, list }) => {
          return (
            <StepRow key={name}>
              <Text
                className="title-mobile"
                as="h4"
                size={6}
                css={{ marginBottom: '$6', '& strong': { fontWeight: '$5' } }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Left>
                <Text
                  className="title-desktop"
                  as="h4"
                  size={6}
                  css={{ marginBottom: '$6', '& strong': { fontWeight: '$5' } }}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <ul>
                  {list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <ButtonLink
                  href="https://github.com/aimhubio/aim"
                  target="_blank"
                  css={{ marginTop: '$6', fontWeight: '$3' }}
                >
                  Check out our Github
                  <Icon name="arrow" size={24} />
                </ButtonLink>
              </Left>
              <Right>
                <Image
                  src={`/images/static/why-use-aim/${name}.png`}
                  alt="AimStack"
                  width={605}
                  height={360}
                  quality={100}
                />
              </Right>
            </StepRow>
          );
        })}
      </Container>
    </FeaturesStyle>
  );
};

export default Features;
