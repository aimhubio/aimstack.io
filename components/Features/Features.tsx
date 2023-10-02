import React from 'react';

import { Text } from 'styles/foundations';
import { Button } from 'components/UIkit';
import {steps, comingSoonSteps } from './stepsConfig';
import {
  FeaturesSection,
  Step,
  FeaturesContainer,
  FeaturesContainerHeader,
  FeaturesContainerContent,
  StepContent,
  StepBannerImage, ComingSoonContainerContent,
} from './Features.style';

const Features = () => {
  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <FeaturesContainerHeader>
          <Text as="h2" size={9} className="features-title">
            Aim capabilities
          </Text>
          <Text size={3} className="features-subtitle">
            Aim comes with a set of fundamental features that allows to create
            complete logging apps for any kind of software - specifically AI
            Systems: LLM apps, AI pipelines etc.
          </Text>
        </FeaturesContainerHeader>
        <FeaturesContainerContent>
          {steps.map(({ key, title, description, list, explorationLink, bannerImgSrc }) => (
              <Step key={key}>
                <StepContent>
                  <Text className="step-title" size={6}>
                    {title}
                  </Text>
                  {bannerImgSrc ? (
                    <StepBannerImage
                      src={bannerImgSrc}
                      className='step-banner-image-mobile'
                      alt="AimStack"
                      width={600}
                      height={380}
                      quality={100}
                    />
                  ) : null}
                  <Text className="step-description" size={3}>
                    {description}
                  </Text>
                  <ul>
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  {explorationLink ? (
                    <Button
                      as="a"
                      href={explorationLink}
                      target="_blank"
                      variant='outline'
                      css={{ marginTop: '$6', fontWeight: '$3' }}
                    >
                      Get Started
                    </Button>
                  ) : null}
                </StepContent>
                {bannerImgSrc ? (
                  <StepBannerImage
                    src={bannerImgSrc}
                    alt="AimStack"
                    width={600}
                    height={380}
                    quality={100}
                  />
                ) : null}
              </Step>
            )
          )}
        </FeaturesContainerContent>
        <ComingSoonContainerContent>
          {comingSoonSteps.map(({ key, title, description, list }) => {
            return (
              <Step key={key} className='step-coming-soon'>
                <StepContent>
                  <Text className="step-title" size={6}>
                    {title}
                  </Text>
                  <Text className="step-description" size={3}>
                    {description}
                  </Text>
                  <ul>
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </StepContent>
              </Step>
            );
          })}
        </ComingSoonContainerContent>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
