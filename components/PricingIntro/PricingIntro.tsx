import React, { FC, useState } from 'react';
import { PricingIntroStyle, PricingSwitch } from './PricingIntro.style';
import { Text, Container } from 'styles/foundations';
import { Button } from 'components/UIkit';

interface IPricingIntro {
}

const PricingIntro: FC<IPricingIntro> = ({
}) => {
  const [isYearly, setIsYearly] = useState(true);

  const togglePricingPeriod = () => {
    setIsYearly(!isYearly);
  };

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

        <PricingSwitch>
          <div className="toggle" onClick={togglePricingPeriod}>
            <span className={`toggle-option ${!isYearly ? 'active' : ''}`}>
              Monthly
            </span>
            <span className={`toggle-option ${isYearly ? 'active' : ''}`}>
              Yearly
              {isYearly && <span className="save-text">SAVE UP TO 10%</span>}
            </span>
          </div>
        </PricingSwitch>

        <div className="pricing">
          <div className="tier">
            <Text as='h2' size={5}>
              Free
            </Text>
            <Text>
              Use Aim for personal projects.
            </Text>

            <div className="priceContainer">
              {isYearly ? (
                <div className="annualPrice">
                  <div className="priceAmount">
                    <span className="currency">$</span>
                    <span className="digits">0</span>
                    <span className="text"> / year</span>
                  </div>
                </div>
              ) : (
                <div className="annualPrice">
                  <div className="priceAmount">
                    <span className="currency">$</span>
                    <span className="digits">0</span>
                    <span className="text"> / month</span>
                  </div>
                </div>
              )}
              <div className="priceDesc">&nbsp;</div>
            </div>

            <Button
              variant="outline"
              as="a"
              size={3}
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
              {isYearly ? (
                <div className="annualPrice">
                  <div className="priceAmount">
                    <span className="currency">$</span>
                    <span className="digits">120</span>
                    <span className="text"> / year</span>
                  </div>
                </div>
              ) : (
                <div className="annualPrice">
                  <div className="priceAmount">
                    <span className="currency">$</span>
                    <span className="digits">11</span>
                    <span className="text"> / month</span>
                  </div>
                </div>
              )}
              <div className="priceDesc">Per user</div>
            </div>

            <Button
              variant="outline"
              as="a"
              size={3}
              href={isYearly? "https://buy.stripe.com/cN203R9Rh2Us71S8wy": "https://buy.stripe.com/aEUbMzaVlfHe3PG6oo"}
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
              size={3}
              href="/contact"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <Text as="h2" size={8} css={{marginTop: '64px', textAlign: 'center'}}>
          Compare plans and features.
        </Text>
        <Text as="p" css={{marginTop: '12px', textAlign: 'center'}}>
          Overview of what is included in each plan.
        </Text>
      </Container>
    </PricingIntroStyle>
  );
};

export default PricingIntro;