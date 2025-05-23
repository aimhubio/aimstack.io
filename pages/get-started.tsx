import React from 'react';
import { Text, Flex } from 'styles/foundations';
import Button from 'components/UIkit/Button/Button';
import Seo from 'components/SEO/SEO';
import getStartedSeo from 'content/SeoData/getStarted';
import {GetStartedContainer, Section, ButtonGroup} from 'styles/pages/GetStarted.style';

const GetStarted = () => {
  return (
    <>
      <Seo {...getStartedSeo} />
      <GetStartedContainer>
        {/* Section 1: AimHub Installation and Documentation */}
        <Section>
          <Flex direction="column" css={{ marginTop: '80px' }}>
            <Text as="h1" size={8} css={{ marginBottom: '$6' }}>
              AimHub Installation and Documentation
            </Text>
            <Text size={4} css={{ marginBottom: '$6' }}>
              Get started with AimHub by exploring our documentation and installation guides.
            </Text>
            <ButtonGroup>
              <Button
              as="a"
              variant="primary"
              href="https://docs.aimhub.io/quick-start/installation/docker"
              css={{
                fontWeight: '500',
              }}
            >
              Installation guide
            </Button>
            </ButtonGroup>
          </Flex>
        </Section>

        {/* Section 2: License Purchase Options */}
        <Section>
          <Flex direction="column" >
            <Text as="h2" size={8} css={{ marginBottom: '$6' }}>
              Purchase a License
            </Text>
            <Text size={5} css={{ marginBottom: '$6' }}>
              Choose the license plan that best fits your team&apos;s needs.
            </Text>
            <Text size={2} css={{ marginBottom: '$6' }}>
              Once the purchase is complete, you will receive an email with your license key.
            </Text>
            <ButtonGroup>
              <Button
                as="a"
                variant="outline"
                href="https://buy.stripe.com/aEUbMzaVlfHe3PG6oo"
                css={{
                  fontWeight: '500',
                }}
              >
                Monthly License - $11/month per user
              </Button>
              <Button
                as="a"
                variant="gradient"
                href="https://buy.stripe.com/cN203R9Rh2Us71S8wy"
                css={{
                  fontWeight: '500',
                }}
              >
                Yearly License - $120/year per user (Save 10%)
              </Button>
            </ButtonGroup>
          </Flex>
        </Section>

        {/* Section 3: Terms and Conditions Link */}
        <Section>
          <Flex direction="column">
            <Text as="h2" size={8} css={{ marginBottom: '$6' }}>
              Terms and Conditions
            </Text>
            <Text size={4} css={{ marginBottom: '$6' }}>
              Please review our terms and conditions before purchasing a license.
            </Text>
            <ButtonGroup>
              <Button
                as="a"
                href="/terms"
                css={{
                  fontWeight: '500',
                }}
              >
                View Terms and Conditions
              </Button>
            </ButtonGroup>
          </Flex>
        </Section>
      </GetStartedContainer>
    </>
  );
};

export default GetStarted;