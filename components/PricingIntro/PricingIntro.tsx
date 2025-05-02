import React, { FC } from 'react';
import { PricingIntroStyle } from './PricingIntro.style';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';

interface IPricingIntro {
}

const PricingIntro: FC<IPricingIntro> = ({
}) => {
  return (
    <PricingIntroStyle>
      <Container>
        <Text as="h2" size={8} css={{margin: '12px 0', textAlign: 'center'}}>
          Full control. No lock-in. Built for teams.
        </Text>
        <Text as="p" css={{margin: '12px 0', textAlign: 'center'}}>
          Choose the plan that fits your team — from personal projects to enterprise ML workflows.
        </Text>
        <Text as="p" css={{margin: '12px 0 40px', textAlign: 'center'}}>
          All plans include fast experiment tracking and a powerful UI.
        </Text>
        <div className="pricing">
          <div className="tier">
            <Text as='h2' size={5}>
              Free
            </Text>
            <Text>
              Use Aim for personal projects.
            </Text>

            <div className="priceContainer">
              <div className="annualPrice">
                <div className="priceAmount">$0 / year</div>
              </div>
              <div className="monthlyPrice">
                <div className="priceAmount">$0 / month</div>
              </div>
            </div>

            <Button
              variant="outline"
              as="a"
              size={2}
              href="https://github.com/aimhubio/aim"
            >
              Get Started
            </Button>
          </div>

          <div className="tierHighlighted">
            <Text as='h2' size={5}>
              Team Tier
            </Text>
            <Text size={1}>
              Use AimHub for scaling organizations and multi-team usage.
            </Text>

            <div className="priceContainer">
              <div className="annualPrice">
                <div className="priceAmount">$120 / year</div>
              </div>
              <div className="monthlyPrice">
                <div className="priceAmount">$11 / month</div>
              </div>
              <div className="priceDesc">Per user</div>
            </div>

            <Button
              variant="outline"
              as="a"
              size={2}
              href="https://docs.aimhub.io/quick-start/installation/docker"
            >
              Install Now
            </Button>
          </div>

          <div className="tier">
            <Text as='h2' size={5}>
              Enterprise
            </Text>
            <Text size={1}>
              Best for organizations needing extensive integrations, strong security, and dedicated support.
            </Text>
            <div className="price">-</div>
            <Button
              variant="community"
              as="a"
              size={2}
              href="mailto:hello@aimstack.io"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <Text as="h2" size={8} css={{marginTop: '64px', textAlign: 'center'}}>
          Compare plans and features.
        </Text>
        <Text as="p" css={{marginTop: '12px', textAlign: 'center'}}>
          Overview of what's included in each plan.
        </Text>
      </Container>
    </PricingIntroStyle>
  );
};

export default PricingIntro;