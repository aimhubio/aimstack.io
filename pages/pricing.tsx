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
        <Flex direction="column" className="text-center" css={{ py: '80px' }}>
          <Text as="h1" size={10} css={{ marginBottom: '$6' }}>
            Aim support options
          </Text>
          <Text size={4}>Aim is free, open-source and self-hosted. </Text>
        </Flex>
        <Flex
          css={{ paddingBottom: '104px' }}
          direction={{ '@bp2': 'column' }}
          gap={12}
        >
          {pricingList.map((card) => (
            <PricingCard key={card.title} {...card} />
          ))}
        </Flex>
      </PricingContainer>
    </>
  );
};

export default Pricing;
