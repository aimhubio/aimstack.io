import React from 'react';
import PricingTable from "components/PricingTable/PricingTable";
import PricingIntro from 'components/PricingIntro/PricingIntro';
import FrequentlyAsked from 'components/FrequentlyAsked/FrequentlyAsked';

import { Flex, Container, Text } from 'styles/foundations';
import { Button } from 'components/UIkit';
import Seo from 'components/SEO/SEO';
import pricingSeo from 'content/SeoData/pricing';
import { PricingContainer } from 'styles/pages/Pricing.style';

const Pricing = () => {
  return (
    <>
      <Seo {...pricingSeo} />
      <PricingContainer>
        <PricingIntro/>
        <Flex
          css={{ paddingBottom: '104px' }}
          direction={{ '@bp2': 'column' }}
          gap={12}
        >
        <PricingTable/>
        </Flex>
        <FrequentlyAsked/>
        <Container css={{textAlign: 'center', marginBottom: '$6'}}>
          <Text as="h1" size={8} css={{textAlign: 'center', marginBottom: '$6' }}>
            Get started today or schedule a demo for your personal onboarding
          </Text>
          <Button
            variant="gradient"
            as="a"
            size={3}
            css={{textAlign: 'center', marginBottom: '$6', paddingLeft:'34px', paddingRight:'34px'}}
            href="https://buy.stripe.com/aEUbMzaVlfHe3PG6oo"
          >
            Start Free Trial
          </Button>
        </Container>
      </PricingContainer>
    </>
  );
};

export default Pricing;
