import React from 'react';
import PricingCard from 'components/PricingCard/PricingCard';
import { Text, Flex } from 'styles/foundations';
import pricingList from 'content/pricingList';
import Seo from 'components/SEO/SEO';
import pricingSeo from 'content/SeoData/pricing';
import { PricingContainer } from 'styles/pages/Pricing.style';

const Pricing = () => {
  return (
    <>
      <Seo {...pricingSeo} />
      <PricingContainer>
        <Flex
          css={{ paddingBottom: '104px' }}
          direction={{ '@bp2': 'column' }}
          gap={12}
        >
        <PricingCard/>
        </Flex>
      </PricingContainer>
    </>
  );
};

export default Pricing;
