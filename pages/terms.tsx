import React from 'react';
import Markdown from 'react-markdown';

import { Text, Flex } from 'styles/foundations';
import termsContent from 'content/termsContent';
import { TermsContainer } from 'styles/pages/Terms.style';
import Accordion from 'components/Accordion/Accordion';
import termsSeo from '../content/SeoData/terms';
import Seo from 'components/SEO/SEO';

const Terms = () => {
  return (
    <>
      <Seo {...termsSeo} />
      <TermsContainer>
        <Flex direction="column" className="text-center" css={{ py: '80px' }}>
          <Text as="h1" size={10} css={{ marginBottom: '$6' }}>
            Terms
          </Text>
          <Text size={4}>AimHub is a registered trademark of AimHub, Inc.</Text>
        </Flex>
        <Flex css={{ paddingBottom: '104px' }} direction="column" gap={1}>
          {termsContent.map((term, i) => (
            <Accordion title={term.header} key={i}>
              <Markdown>{term.content}</Markdown>
            </Accordion>
          ))}
        </Flex>
      </TermsContainer>
    </>
  );
};

export default Terms;
