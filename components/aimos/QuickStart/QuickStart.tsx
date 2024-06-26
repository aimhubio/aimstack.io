import React from 'react';
import {
  QuickStartSection,
  QuickStartSectionInner,
  QuickStartInner,
  Left,
  Right,
  QuickStartShapeImage,
} from './QuickStart.style';
import CodeBlock from './CodeBlock';
import { Container, Text } from 'styles/foundations';
import { Button } from 'components/UIkit';

import TopBg from 'public/images/static/quick-start/top-bg.svg';
import BottomBg from 'public/images/static/quick-start/bottom-bg.svg';

const QuickStart = () => {
  return (
    <QuickStartSection id="quick-start">
      <QuickStartShapeImage src={TopBg} alt={'top-bg'} priority={true} />
      <QuickStartSectionInner>
        <Container>
          <QuickStartInner>
            <Left>
              <Text as="h2" className="quickstart-title" size={9}>
                Use Aim in any environment. Get started with Aim in a few steps
              </Text>
              <ul className="quickstart-subtitle">
                <li>
                  <Text size={3}>It’s very easy to get started with Aim.</Text>
                </li>
                <li>
                  <Text size={3}>
                    This example logs a basic ML training run.
                  </Text>
                </li>
                <li>
                  <Text size={3}>
                    Aim logs record sequences as part of containers. In this
                    case the Standard Package Run container.
                  </Text>
                </li>
                <li>
                  <Text size={3}>Start Aim Server and Aim UI.</Text>
                </li>
                <li>
                  <Text size={3}>You are ready to go!! 🚀</Text>
                </li>
              </ul>
              <Button
                as="a"
                className={'quickstart-button'}
                href={
                  'https://aimos.readthedocs.io/en/latest/getting_started/quick_start.html'
                }
                target="_blank"
              >
                Quick Start
              </Button>
            </Left>
            <Right>
              <CodeBlock />
            </Right>
            <Button
              as="a"
              className={'quickstart-button-mobile'}
              href={
                'https://aimos.readthedocs.io/en/latest/getting_started/quick_start.html'
              }
              target="_blank"
            >
              Quick Start
            </Button>
          </QuickStartInner>
        </Container>
      </QuickStartSectionInner>
      <QuickStartShapeImage src={BottomBg} alt={'bottom-bg'} priority={true} />
    </QuickStartSection>
  );
};

export default QuickStart;
