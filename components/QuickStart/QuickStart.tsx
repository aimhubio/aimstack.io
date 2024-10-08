import React from 'react';
import {
  QuickStartStyle,
  QuickStartInner,
  Left,
  Right,
} from './QuickStart.style';
import CodeBlock from './CodeBlock';
import { Container, Text } from 'styles/foundations';

const QuickStart = () => {
  return (
    <QuickStartStyle id="quick-start">
      <Container>
        <QuickStartInner>
          <Left>
            <Text
              as="h3"
              size={8}
              css={{
                '& span': { backgroundColor: '$secondary', color: '$white' },
              }}
            >
              Get started
              <br /> <span>in under a minute</span> and on{' '}
              <span>any environment</span>
            </Text>
          </Left>
          <Right>
            <CodeBlock />
          </Right>
          <Text className="float-text" size={3}>
            Now check out our{' '}
            <a
              href="https://github.com/aimhubio/aim/"
              className="link"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub repo
            </a>{' '}
            or{' '}
            <a
              className="link"
              href="https://aimstack.readthedocs.io/en/latest/"
              target="_blank"
              rel="noreferrer noopener"
            >
              documentation
            </a>{' '}
            to learn more
            <img referrerPolicy="no-referrer-when-downgrade"
               src="https://static.scarf.sh/a.png?x-pxid=8b1927ba-96ec-4c48-9ee9-6037a9b3dbe5"/>
          </Text>
        </QuickStartInner>
      </Container>
    </QuickStartStyle>
  );
};

export default QuickStart;
