import React, { FC, useState } from 'react';
import { PricingTableStyle, PricingInfo, PriceLabel, Switch, BillingToggle, ToggleRow, SavingsBadge, ButtonContainer, HeaderContent, PriceDisplay } from './PricingTable.style';
import PricingTableRows from 'content/pricingList';
import {
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { Text } from 'styles/foundations';
import { Button } from 'components/UIkit';

interface IPricingTable {
}

const PricingTable: FC<IPricingTable> = ({
}) => {
  // State to track if annual billing is selected
  const [isAnnual, setIsAnnual] = useState(true);

  // Pricing data
  const pricingData = {
    free: {
      monthly: {
        price: '$0',
        period: 'month'
      },
      annual: {
        price: '$0',
        period: 'year'
      }
    },
    team: {
      monthly: {
        price: '$11',
        period: 'month'
      },
      annual: {
        price: '$120',
        period: 'year',
      }
    }
  };

  return (
    <PricingTableStyle>
      {/* headers*/}
      <tr>
        {/* Features column - now with left alignment */}
        <th>
          <HeaderContent align="left">
            <PricingInfo align="left">
              <Text as='h2' size={5} css={{ marginBottom: '$6' }}>Plans & Features</Text>
              <BillingToggle align="left">
                <ToggleRow align="left">
                  <PriceLabel active={!isAnnual}>Monthly</PriceLabel>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={isAnnual}
                      onChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className="slider"></span>
                  </Switch>
                  <PriceLabel active={isAnnual}>Yearly</PriceLabel>
                </ToggleRow>
                <SavingsBadge align="left">BILLED YEARLY SAVE UP TO 10%</SavingsBadge>
              </BillingToggle>
            </PricingInfo>
            {/* Empty ButtonContainer to maintain consistent spacing */}
            <ButtonContainer />
          </HeaderContent>
        </th>

        {/* Free plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Free and Open Source
              </Text>
              <PriceDisplay>
                <span className="currency">
                  {isAnnual ? pricingData.free.annual.price.charAt(0) : pricingData.free.monthly.price.charAt(0)}
                </span>
                <span className="digits">
                  {isAnnual ? pricingData.free.annual.price.substring(1) : pricingData.free.monthly.price.substring(1)}
                </span>
                <span className="text"> / {isAnnual ? pricingData.free.annual.period : pricingData.free.monthly.period}</span>
              </PriceDisplay>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="outline"
                as="a"
                size={3}
                href="https://github.com/aimhubio/aim"
                css={{
                  width: '70%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Get Started
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>

        {/* Team plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$6'}}>
                Team Tier
              </Text>
              <PriceDisplay>
                <span className="currency">
                  {isAnnual ? pricingData.team.annual.price.charAt(0) : pricingData.team.monthly.price.charAt(0)}
                </span>
                <span className="digits">
                  {isAnnual ? pricingData.team.annual.price.substring(1) : pricingData.team.monthly.price.substring(1)}
                </span>
                <span className="text"> / {isAnnual ? pricingData.team.annual.period : pricingData.team.monthly.period}</span>
              </PriceDisplay>
              <Text size={1}> Per user </Text>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="outline"
                as="a"
                size={3}
                href="/get-started"
                css={{
                  width: '70%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Get Started
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>

        {/* Enterprise plan - keeping center alignment */}
        <th>
          <HeaderContent>
            <PricingInfo>
              <Text as='h2' size={5} css={{ marginBottom: '$10'}}>
                Enterprise
              </Text>
              <Text as='h2' css={{ fontSize: '24px', fontWeight:'bold', marginBottom: '$6'}}>
                Contact Us
              </Text>
            </PricingInfo>
            <ButtonContainer>
              <Button
                variant="community"
                as="a"
                size={3}
                href="/contact"
                css={{
                  width: '70%',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                Contact Us
              </Button>
            </ButtonContainer>
          </HeaderContent>
        </th>
      </tr>
      
      {/* Rest of the table */}
      {PricingTableRows.map((item, index) => (
        <tr key={index}>
          <td>{item[0]}</td>
          {
            item[1] === 'Yes' ?
              <td><IconCheck color={'green'}/></td>:
            item[1] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[1]}</td>
          }
          {
            item[2] === 'Yes' ?
              <td><IconCheck color={'white'}/></td>:
            item[2] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[2]}</td>
          }
          {
            item[3] === 'Yes' ?
              <td><IconCheck color={'green'}/></td>:
            item[3] === 'No' ?
              <td><IconX color={'grey'}/></td>:
              <td>{item[3]}</td>
          }
        </tr>
      ))}
    </PricingTableStyle>
  );
};

export default PricingTable;