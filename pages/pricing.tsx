import React from 'react';
import PricingTable from "components/PricingTable/PricingTable";
import PricingIntro from 'components/PricingIntro/PricingIntro';
import FrequentlyAsked from 'components/FrequentlyAsked/FrequentlyAsked';

import { Flex } from 'styles/foundations';
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
      </PricingContainer>
    </>
  );
};

export default Pricing;
